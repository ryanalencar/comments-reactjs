import React from 'react';
import Comment from './Comment';

const Comments = ({ comments }) => {
    const keys = Object.keys(comments);
    return (
        <div>
            {/* Comment */}
            {keys.map(key => <Comment c={comments[key]} />)}
        </div>
    )

}

export default Comments