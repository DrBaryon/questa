import React from 'react';

class Comment extends React.Component {


  render(){
    if (!this.props.comment){
      return (<h2>Loading</h2>);
    }
    return(
      <li className="comment">
        <div className = "comment-header">
          <img src={this.props.comment.author.avatar_url} width="25" height="25"/>
          <span>{this.props.comment.author.first_name + " " + this.props.comment.author.last_name}</span>
        </div>
        <div className = "comment-body">
          {this.props.comment.content}
        </div>
        <div className = "comment-footer">
          <button type="button" onClick={this.addComment}>Reply</button>
        </div>
      </li>
    );
  }
}

export default Comment;
