import React from 'react'
import '../css/User.css'

const User = props => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light mb-4">
                <div class="container">
                    <a class="navbar-brand" href="#">CommmentApp</a>
                    Logado como: {props.email}
                    <button onClick={props.logout} className="exit-btn"><i className="material-icons">exit_to_app</i></button>
                </div>
            </nav>
        </div>
    )
}

export default User