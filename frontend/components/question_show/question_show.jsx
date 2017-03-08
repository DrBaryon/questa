import React from 'react';
import {Link, withRouter} from 'react-router';
import QueryBar from '../question_index/query_bar';
import Answer from './answer';
import AnswerForm from './answer_form';

class QuestionShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {showAnswerForm: false};
    this.toggleAnswerForm = this.toggleAnswerForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchQuestion(nextProps.params.id);
    }
  }

  routeIsCorrect() {
    return parseInt(this.props.params.id) === this.props.question.id;
  }

  toggleAnswerForm(){
    this.setState({
      showAnswerForm: !this.state.showAnswerForm
    });
  }

  render(){
    if (!this.props.question){
      return (<h2>Loading</h2>);
    }
    let answers = [];

    if (this.props.question.answers){
      answers = this.props.question.answers.map(answer =>
      <Answer key={answer.id} answer={answer}
        currentUser={this.props.currentUser}
        createComment={this.props.createComment}
        receiveAnswer={this.props.receiveAnswer}/>);
    }
    let answerform = "";
    if (this.state.showAnswerForm){
      answerform =
      <div className="answer-form-container">
        <AnswerForm question={this.props.question}
          currentUser={this.props.currentUser}
          createAnswer={this.props.createAnswer}
          updateQuestion={this.props.updateQuestion}
          toggleAnswerForm={this.toggleAnswerForm}/>
        <button className="close-form" type="button" onClick={this.toggleAnswerForm}>X</button>
      </div>;
    }
    return (

      <div className="question-page">
        {answerform}
        <div className="header">
          <QueryBar createQuestion={this.props.createQuestion} logout={this.props.logout}/>
        </div>
        <div className="main">
          <div className="main-content">
            <div className="question-info-header">
              <h1>{this.props.question.title}</h1>
              <h2>{this.props.question.description}</h2>
              <div className="question-toolbar">
                <button className="answer-button" type="button" onClick={this.toggleAnswerForm}>Answer</button>
              </div>
            </div>
            <div className="answers-list-header">
                {parseInt(answers.length) + " Answers"}
            </div>
            <ul className="answers-list">
                {answers}
            </ul>
          </div>
          <div className="right-sidebar-container">
            <div className="right-sidebar">
              <h2>Related Questions</h2>
              <ul className="related-questions">
                <li><a>Related Question</a></li>
                <li><a>Another Related Question</a></li>
              </ul>
              <a>More Related Questions</a>
              <h2>Question Stats</h2>
              <ul className="question-stats">
                <li><a>Stats for days</a></li>
              </ul>
              <a>More Question Stats</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionShow;

// let answers = "";
// if (!!question.answers){
//   answers = question.answers.map(answer => (
//     <Answer key={question.id} answer={answer} />
//   ));
// }
