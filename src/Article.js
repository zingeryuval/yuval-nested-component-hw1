import React from 'react';
import CommentList from './CommentList';

class Article extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <img src={this.props.image}/>
                <CommentList></CommentList>
            </div>
        )
    }
}

export default Article;