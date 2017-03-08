import React from 'react';
import CommentForm from './comment_form';
import Comment from './comment';

class Answer extends React.Component {

  constructor(props){
    super(props);
    this.state = { showComments: false };
    this.toggleComments = this.toggleComments.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  toggleComments(){
    this.setState({
      showComments: !this.state.showComments
    });
  }

  deleteAnswer(){
    if (this.props.answer.author.id === this.props.currentUser.id){
      this.props.deleteAnswer(this.props.answer.id);
    }
  }

  render(){
    if (!this.props.answer){
      return (<h2>Loading</h2>);
    }
    let comments = [];
    if (this.props.answer.comments){
      comments = this.props.answer.comments.map(comment =>
        <Comment key={comment.id} comment={comment}/>);
    }
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
          <a onClick={this.deleteAnswer}>Delete</a>
        </div>
        {answerComments}
      </li>
    );
  }
}

export default Answer;
