import React, { Component } from 'react'
import Comments from './components/Comments'
import NewComment from './components/NewComment'
import Login from './components/Login'
import SignUp from './components/SignUp'
import User from './components/User'
import 'bootstrap-css-only'
import './css/App.css'
import './css/Login.css'
import './css/SignUp.css'
import 'material-icons'


import { database, auth } from './firebase'

class App extends Component {
  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    authError: '',
    isSignUpError: false,
    signUpError: '',
    user: {},
    userScreen: 'login'
  }

  sendComment = comment => {
    const id = database.ref().child('comments').push().key
    const comments = {}
    comments['comments/' + id] = {
      comment,
      email: this.state.user.email,
      userId: this.state.user.uid
    }

    database.ref().update(comments)
  }

  login = async (email, pass) => {
    const { auth } = this.props

    this.setState({
      isAuthError: false,
      authError: ''
    })

    // Try Catch para tentar realizar o login
    try {
      await auth.signInWithEmailAndPassword(email, pass)
      // console.log('Logar: ', email, pass)
    } catch (error) {
      this.setState({
        isAuthError: true,
        authError: error.code
      })
    }
  }

  createAccount = async (email, pass) => {
    const { auth } = this.props

    this.setState({
      signUpError: '',
      isSignUpError: false
    })

    // Try Catch para tentar realizar o cadastro
    try {
      await auth.createUserWithEmailAndPassword(email, pass)
      console.log('Cadastrar: ', email, pass)
    } catch (error) {
      this.setState({
        isSignUpError: true,
        signUpError: error.code
      })
    }
  }

  componentDidMount() {
    const { database, auth } = this.props
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuth: true,
          user,
        })
      } else {
        this.setState({
          isAuth: false,
          user: {}
        })
      }
      console.log(user)
    })
  }

  logout = async () => {
    const { auth } = await this.props
    auth.signOut()
  }
  
  changeScreen = (screen) => {
    this.setState({
      userScreen: screen
    })
  }

  render() {
    return (
      <div>
        {this.state.isAuth && <User email={this.state.user.email} logout={this.logout} />}

        {!this.state.isAuth && this.state.userScreen === 'login' &&
          <Login login={this.login} isAuthError={this.state.isAuthError} authError={this.state.authError} changeScreen={this.changeScreen}/>
        }

        {!this.state.isAuth && this.state.userScreen === 'signUp' &&
          <SignUp createAccount={this.createAccount} isSignUpError={this.state.isSignUpError} signUpError={this.state.signUpError} changeScreen={this.changeScreen}/>
        }

        {this.state.isAuth && <NewComment sendComment={this.sendComment} newComments={this.state.newComments} />}

        <Comments comments={this.state.comments} />

        {this.state.isLoading && <p>Carregando...</p>}
      </div>
    )
  }
}

export default App
