import React from 'react';
import {Link, withRouter} from 'react-router';
import QueryBar from '../question_index/query_bar';
import Answer from './answer';

class QuestionShow extends React.Component {

  constructor(props){
    super(props);
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

  render(){
    if (!this.props.question){
      return (<h2>Loading</h2>);
    }
    const question = this.props.question;


    return (
      <div className="question-page">
        <div className="header">
          <QueryBar createQuestion={this.props.createQuestion}/>
        </div>
        <div className="main">
          <div className="main-content">
            <div className="question-info-header">
              <h1>{question.title}</h1>
              <h2>{question.description}</h2>

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
