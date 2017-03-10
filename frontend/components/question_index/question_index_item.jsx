import React from 'react';

class QuestionIndexItem extends React.Component {

  render(){
    // const tag = Object.keys(this.props.question.topics)[0];
    // let bestAnswer = {author: {avatar_url: "", first_name: "", last_name: ""}};
    // if (!!this.props.question.answers[0]){
    //   bestAnswer = this.props.question.answers[0];
    // }
    let question = this.props.question;
    return(
      <li className="question">
        <div className="question-header">
          <a href={"/#/" + question.id}>{question.title}</a>
        </div>
        { question.bestAnswer &&
        <div className="best-answer">
          <div className="best-answer-header">
            {
              <img src={question.bestAnswer.author.avatar_url} width="40" height="40"/>
            }
            {
              question.bestAnswer.author.first_name + " " +
              question.bestAnswer.author.last_name
            }

          </div>
          <div className="best-answer-content">
            {question.bestAnswer.content}
          </div>
          <div className = "best-answer-footer">
            <a>Comment</a>
          </div>
        </div>
      }
      </li>
    );
  }
}

// <h5>{tag}</h5>

export default QuestionIndexItem;
