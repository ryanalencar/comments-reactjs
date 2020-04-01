import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import Header from './Header'

class SignUp extends Component {
    state = {
        email: '',
        pass: '',
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.pass)
    }

    render() {
        const errorMensages = {
            'auth/invalid-email': 'E-mail inválido',
            'auth/weak-password': 'Senha fraca',
            'auth/email-already-in-use': 'E-mail já está em uso'
        }

        return (
            <div>
                <Header></Header>
                <div className="container">
                    <h1 className="text-center display-4 my-4">Criar Conta</h1>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" className="form-control" onChange={this.handleChange('email')} placeholder="Digite seu email" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="pass">Senha</label>
                            <input type="password" id="pass" className="form-control" onChange={this.handleChange('pass')} placeholder="Digite sua senha" />
                        </div>
                    </div>
                    {
                        this.props.isSignUpError &&
                        <div>
                            <div class="notif notif--error">
                                <div class="notif__content"><i class="material-icons notif__icon">error</i>
                                    <div>
                                        <h1 class="notif__title">Erro ao cadastrar</h1>
                                        <span class="notif__subtitle">{errorMensages[this.props.signUpError]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row my-4">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <button type="button" className="btnLogin draw" onClick={this.createAccount}>Criar conta</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btnLogin center" onClick={() => this.props.changeScreen('login')}>Já tenho uma conta, entrar!</button>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp