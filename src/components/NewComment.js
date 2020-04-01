import React, { Component } from 'react'

class NewComment extends Component {
    state = {
        newComments: '',
        empty: true,
    }

    handleChange = (e) => {
        var message = e.target.value
        if (message === '') {
            this.setState({
                empty: true
            })
            console.log(message)
        } else {
            this.setState({
                empty: false,
                newComments: message
            })
            console.log(message)
        }
    }

    sendComment = (e) => {
        e.preventDefault()
        if (!this.state.empty) {
            this.props.sendComment(this.state.newComments)
            this.setState({
                newComments: '',
                empty: true
            })
        } else {
            this.setState({
                newComments: '',
            })
            return (
                alert('Não é possível enviar mensagens vazias')
            )
        }

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.sendComment}>
                    <textarea className="form-control textareaInput" value={this.state.newComments} onChange={this.handleChange}></textarea>
                    <button className="button mb-5 mt-2" type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

export default NewComment