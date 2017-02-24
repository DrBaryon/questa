import React from 'react';
import {withRouter} from 'react-router';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {content: "",
      commentable_id: this.props.commentableId,
      commentable_type: this.props.commentableType};
    this.updateContent = this.updateContent.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  addComment(e){
    e.preventDefault();
    const comment = this.state;
    this.props.createComment(comment);
  }

  updateContent(e){
    this.setState({
      ["content"]: e.currentTarget.value
    });
  }



  render(){
    return(
      <form className = "comment-form" onSubmit={this.addComment}>
        <img src={this.props.currentUser.avatar_url} width="25" height="25"/>
        <textarea rows="1" width="432" onChange={this.updateContent} />
        <input type="submit" value = "Comment"/>
      </form>
    );
  }
}

export default CommentForm;
