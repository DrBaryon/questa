import React from 'react';

class QuestionIndexItem extends React.Component {

  render(){
    // const tag = Object.keys(this.props.question.topics)[0];
    let bestAnswer = {};
    if (!!this.props.question.answers[0]){
      bestAnswer = this.props.question.answers[0];
    }
    return(
      <li className="question">
        <div className="question-header">
          <a href={"/#/" + this.props.question.id}>{this.props.question.title}</a>
          <div className="question-author-info">
            {this.props.question.user.first_name + " " +
            this.props.question.user.last_name}
          </div>
        </div>
        <div className="best-answer">
          {bestAnswer.content}
        </div>
        <div className = "question-footer">
        </div>

      </li>
    );
  }
}

// <h5>{tag}</h5>

export default QuestionIndexItem;
