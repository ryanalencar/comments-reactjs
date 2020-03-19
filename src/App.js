import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'

import { database } from './firebase'

class App extends Component {
  state = {
    comments: {},
    isLoading: false
  }

  sendComment = comment => {
    const id = database.ref().child('comments').push().key
    const comments = {}
    comments['comments/' + id] = {
      comment
    }
    
    database.ref().update(comments)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }

  render() {
    return (
      <div className="">
        <NewComment sendComment={this.sendComment} newComments={this.state.newComments} />
        <Comments comments={this.state.comments} />
        {
          this.state.isLoading && <p>Carregando...</p>
        }
      </div>
    )
  }
}

export default App
