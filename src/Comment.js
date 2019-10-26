import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>{this.props.author}</h2>
                <p>{this.props.date}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Comment;