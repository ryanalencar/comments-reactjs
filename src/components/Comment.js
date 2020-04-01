import React from 'react';

const Comment = ({ c }) => {
    let comment = 'vazio'
    let email = 'vazio'
    
    if (c) {
        if (c.comment && c.email) {
            comment = c.comment
            email = c.email
        } else {
            comment = 'vazioo'
            email = 'vazioo'
        }
    }

    return (
        <div>
            Enviado por: {c.email}
            <br/>
            Comment: {c.comment}
            <hr/>
        </div>
    )
}

export default Comment