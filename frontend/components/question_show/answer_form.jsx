import React from 'react';

class AnswerForm extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = {content: ""};
    this.updateContent = this.updateContent.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(e){
    e.preventDefault();
    debugger
    const answer = this.state;
    this.props.createAnswer(answer);
    this.props.updateQuestion(answer.question);
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
        <div className="header">
          <a><h1>{question.title}</h1></a>
          <h2>{question.description}</h2>
        </div>
        <div className="author-info">
          {this.props.currentUser.first_name + " " +
          this.props.currentUser.last_name}
          <div className="other-info">
          </div>
        </div>
        <textarea onChange={this.updateContent}></textarea>
        <input type="submit"/>
      </form>
    );

  }
}

export default AnswerForm;
