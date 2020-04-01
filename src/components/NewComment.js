import React, { Component } from 'react'

class NewComment extends Component {
    state = {
        newComments: '',
        empty: true
    }
    handleChange = (e) => {
        var message = e.target.value
        if (message === '') {
            this.setState({
                empty: true
            })
        } else {
            this.setState({
                empty: false,
                newComments: message
            })
        }
        console.log(e.target.value)
    }

    sendComment = () => {
        if (!this.state.empty) {
            this.props.sendComment(this.state.newComments)
            this.setState({
                newComments: ''
            })
        } else {
            console.log('Não é possível enviar mensagens vazias')
        }
    }
    render() {
        return (
            <div>
                <textarea value={this.state.newComments} onChange={this.handleChange}></textarea>
                <button onClick={this.sendComment}>Enviar</button>
            </div>
        )
    }
}

export default NewComment