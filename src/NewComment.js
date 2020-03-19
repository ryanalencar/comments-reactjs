import React, { Component } from 'react'

class NewComment extends Component {
    state = {
        newComments: ''
    }
    handleChange = (e) => {
        this.setState({
            newComments: e.target.value
        })
        console.log(e.target.value)
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComments)
        this.setState({
            newComments: ''
        })
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