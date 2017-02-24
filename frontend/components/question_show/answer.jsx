import React from 'react';
import CommentForm from './comment_form';
import Comment from './comment';

class Answer extends React.Component {

  constructor(props){
    super(props);
    this.state = {comments: {}, showComments: false };
    if (this.props.comments){
      this.state.comments = this.props.comments;
    }
    this.toggleComments = this.toggleComments.bind(this);
  }

  toggleComments(){
    this.setState({
      showComments: !this.state.showComments
    });
  }


  render(){
    if (!this.props.answer){
      return (<h2>Loading</h2>);
    }
    const comments = this.state.comments.map(comment =>
      <Comment key={comment.id} comment={comment}/>);
    let answerComments = "";
    if (this.state.showComments){
      answerComments =
      <div className = "answer-comments">
        <CommentForm
          createComment={this.props.createComment}
          answer={this.props.answer}
          commentableType={"Answer"}
          commentableId={this.props.answer.id}
          currentUser={this.props.currentUser}
          />
        <ul className="comment-list">
          {comments}
        </ul>
      </div>;
    }
    return(
      <li className="answer">
        <div className = "answer-header">
          <img src={this.props.answer.author.avatar_url} width="40" height="40"/>
          <span>{this.props.answer.author.first_name + " " + this.props.answer.author.last_name}</span>
        </div>
        <div className = "answer-body">
          {this.props.answer.content}
        </div>
        <div className = "answer-footer">
          <a onClick={this.toggleComments}>View Comments</a>
        </div>
        {answerComments}
      </li>
    );
  }
}

export default Answer;
