import React from 'react';

class QuestionIndexItem extends React.Component {

  render(){
    // const tag = Object.keys(this.props.question.topics)[0];
    let bestAnswer = {author: {avatar_url: "", first_name: "", last_name: ""}};
    if (!!this.props.question.answers[0]){
      bestAnswer = this.props.question.answers[0];
    }
    return(
      <li className="question">
        <div className="question-header">
          <a href={"/#/" + this.props.question.id}>{this.props.question.title}</a>
        </div>
        <div className="best-answer">
          <div className="best-answer-header">
            <img src={bestAnswer.author.avatar_url} width="40" height="40"/>
            {bestAnswer.author.first_name + " " +
            bestAnswer.author.last_name}
          </div>
          <div className="best-answer-content">
            {bestAnswer.content}
          </div>
          <div className = "best-answer-footer">
            <a>Comment</a>
          </div>
        </div>

      </li>
    );
  }
}

// <h5>{tag}</h5>

export default QuestionIndexItem;
