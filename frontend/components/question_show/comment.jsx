import React from 'react';
import CommentForm from './comment_form';

class Comment extends React.Component {

  constructor(props){
    super(props);
    this.state = { showComments: false, showCommentForm: false };
    this.toggleCommentForm = this.toggleCommentForm.bind(this);
    // this.toggleComments = this.toggleComments.bind(this);
  }

  toggleCommentForm(){
    this.setState({
      showCommentForm: !this.state.showCommentForm
    });
  }

  // toggleComments(){
  //   this.setState({
  //     showComments: !this.state.showComments
  //   });
  // }

  render(){
    if (!this.props.comment){
      return (<h2>Loading</h2>);
    }
    return(
      <div className="comment">
        <div className = "comment-header">
          <img src={this.props.comment.author.avatar_url} width="25" height="25"/>
          <span>{this.props.comment.author.first_name + " " + this.props.comment.author.last_name}</span>
        </div>
        <div className = "comment-body">
          {this.props.comment.content}
        </div>
        <div className = "comment-footer">
          <button type="button" onClick={this.toggleCommentForm}>Reply</button>
        </div>
        <div className = "comment-comments">
          {
            this.state.showCommentForm &&
            <CommentForm
              question={this.props.question}
              createComment={this.props.createComment}
              updateQuestion={this.props.updateQuestion}
              commentableType={"Comment"}
              commentableId={this.props.comment.id}
              currentUser={this.props.currentUser}
              />
          }
          <div className="comment-list">
            {this.props.comment.comments &&
              Object.keys(this.props.comment.comments).map(key =>
                <div>
                  <Comment key={key} comment={this.props.comment.comments[key]}/>
                </div>)}
          </div>
        </div>

      </div>
    );
  }
}

export default Comment;
