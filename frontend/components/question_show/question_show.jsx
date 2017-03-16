import React from 'react';
import {Link, withRouter} from 'react-router';
import QueryBar from '../question_index/query_bar';
import AnswerList from './answer_list';
import Answer from './answer';
import AnswerForm from './answer_form';

class QuestionShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {showAnswerForm: false};
    this.toggleAnswerForm = this.toggleAnswerForm.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
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

  deleteQuestion(){
    if (this.props.question.author.id === this.props.currentUser.id){
      this.props.deleteQuestion(this.props.question.id);
      this.props.router.push("/");
    }
  }

  render(){
    if (!this.props.question){
      return (<h2>Loading</h2>);
    }
    let answerform =
      <div className="answer-form-container">
        <AnswerForm question={this.props.question}
          currentUser={this.props.currentUser}
          createAnswer={this.props.createAnswer}
          updateQuestion={this.props.updateQuestion}
          toggleAnswerForm={this.toggleAnswerForm}/>
        <button className="close-form" type="button" onClick={this.toggleAnswerForm}>X</button>
      </div>;
    return (

      <div className="question-page">
        {this.state.showAnswerForm && answerform}
        <QueryBar createQuestion={this.props.createQuestion} logout={this.props.logout}/>
        <div className="main">
          <div className="main-content">
            <div className="question-info-header">

              <div className="question-tags">
                {this.props.question.topics &&
                  Object.keys(this.props.question.topics).map((key) =>
                  <div className = "question-tag">
                    <a href={`/#/topic/${key}`}>{this.props.question.topics[key].name}</a>
                  </div>)
                }
              </div>
              <h1>{this.props.question.title}</h1>
              <h2>{this.props.question.description}</h2>
              <div className="question-toolbar">
                <button className="answer-button" type="button" onClick={this.toggleAnswerForm}>Answer</button>
                <button className="answer-button" type="button" onClick={this.deleteQuestion}>Delete</button>
              </div>
            </div>
            { this.props.question.answers &&
              <AnswerList question={this.props.question}
              currentUser={this.props.currentUser}
              createAnswer={this.props.createAnswer}
              createComment={this.props.createComment}
              updateQuestion={this.props.updateQuestion}
              toggleAnswerForm={this.toggleAnswerForm}/>
            }
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
