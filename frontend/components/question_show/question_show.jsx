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
    const question = this.props.question;
    const answers = this.props.question.answers.map(answer =>
    <Answer key={answer.id} answer={answer}/>);
    let answerform = "";
    if (this.state.showAnswerForm){
      answerform =
      <div className="answer-form-container">
        <AnswerForm question={question}
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
          <QueryBar createQuestion={this.props.createQuestion}/>
        </div>
        <div className="main">
          <div className="main-content">
            <div className="question-info-header">
              <h1>{question.title}</h1>
              <h2>{question.description}</h2>
              <button className="answer-button" type="button" onClick={this.toggleAnswerForm}>Answer</button>
            </div>
            <div className="answers-list">
              <div className="answers-list-header">
                {parseInt(answers.length) + " Answers"}
              </div>
              {answers}
            </div>
          </div>
          <div className="right-sidebar-container">
            <div className="right-sidebar">
              <div className="related-questions">
                <h2>Related Questions</h2>
                <a>More Related Questions</a>
              </div>
              <div className="question-stat">
                <h2>Question Stats</h2>
              </div>
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
