import React from 'react';
import {withRouter} from 'react-router';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {content: "",
      commentable_id: this.props.commentableId,
      commentable_type: this.props.commentableType,
      expanded: false};
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

  toggleExpand(){
    this.setState({
      expanded: !this.state.expanded
    });
  }



  render(){
    return(
      <form className = "comment-form" onSubmit={this.addComment}>
        <textarea rows="1" width="432" onChange={this.updateContent} />
        <input type="submit" value = "Reply"/>
      </form>
    );
  }
}

export default CommentForm;
