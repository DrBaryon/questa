import React from 'react';
import {withRouter} from 'react-router';

class AnswerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { content: "",
      question_id: this.props.question.id };
    this.updateContent = this.updateContent.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(e){
    e.preventDefault();
    const answer = this.state;
    this.props.createAnswer(answer).then(this.props.toggleAnswerForm);
  }

  updateContent(e){
    this.setState({
      ["content"]: e.currentTarget.value
    });
  }

  render(){
    const question = this.props.question;
    return(
      <form className="answer-form" onSubmit={this.answerQuestion}>
        <div className="answer-form-header">
          <a><h1>{question.title}</h1></a>
          <h2>{question.description}</h2>
        </div>
        <div className="author-info">
          <img src={this.props.currentUser.avatar_url} width="40" height="40"/>
          <span>{this.props.currentUser.first_name + " " +
          this.props.currentUser.last_name}</span>
          <div className="other-info">
          </div>
        </div>
        <textarea onChange={this.updateContent}></textarea>
        <input type="submit"/>
      </form>
    );

  }
}

export default withRouter(AnswerForm);
