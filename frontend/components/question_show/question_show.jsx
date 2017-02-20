import React from 'react';
import {Link, withRouter} from 'react-router';
import QueryBar from '../query_bar';
import Answer from './answer';

class QuestionShow extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const question = this.props.question;
    const answers = question.answers.map(answer => (
      <Answer key={question.id} answer={answer} />
    ));
    return (
      <div className="question-page">
        <div className="header">
          <QueryBar createQuestion={this.props.createQuestion}/>
        </div>
        <div className="main">
          <div className="main-content">
            <div className="question-info-header">
              <h1>question.title</h1>
              <h2>question.description</h2>
              {answers}
            </div>
          </div>
          <div className="right-sidebar-container">
            <div className="right-sidebar">
              <div className="checklist">
                <h1>checklist</h1>
              </div>
              <div className="related-questions">
                <h1>related</h1>
              </div>
              <div className="question-stat">
                <h1>stats</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionShow;
