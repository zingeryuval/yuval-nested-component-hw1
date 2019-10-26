import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Comment author="Yuval" date="12/04/1981" content="I'm the best"></Comment>
                <Comment author="my Brother" date="22/06/1986" content="I agree with Yuval"></Comment>
                <Comment author="my Sister" date="23/08/1979" content="I cannot agree more"></Comment>
            </div>
        )
    }
}

export default CommentList;