import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import Header from './Header'


class Login extends Component {
    state = {
        email: '',
        pass: '',
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value,
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.pass)
    }

    render() {
        const errorMensages = {
            'auth/invalid-email': 'E-mail inválido',
            'auth/user-not-found': 'Usuário não encontrado',
            'auth/wrong-password': 'E-mail ou senha inválidos'
        }

        return (
            <div>
                <Header></Header>
                <div className="container">
                    <h1 className="text-center display-4 my-4">Entre para comentar ou crie uma conta:</h1>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" className="form-control" onChange={this.handleChange('email')} placeholder="Digite seu email" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="pass">Senha:</label>
                            <input type="password" id="pass" className="form-control" onChange={this.handleChange('pass')} placeholder="Digite sua senha" />
                        </div>
                    </div>
                    {
                        this.props.isAuthError &&
                        <div class="notif notif--error">
                            <div class="notif__content"><i class="material-icons notif__icon">error</i>
                                <div>
                                    <h1 class="notif__title">Erro ao autenticar</h1>
                                    <span class="notif__subtitle">{errorMensages[this.props.authError]}</span>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row my-4">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <button type="button" className="btnLogin draw" onClick={this.login}>Entrar</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btnLogin center" onClick={() => this.props.changeScreen('signUp')}>Criar conta</button>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login