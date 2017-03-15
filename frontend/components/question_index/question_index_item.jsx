import React from 'react';

class QuestionIndexItem extends React.Component {

  render(){
    let question = this.props.question;
    return(
      <li className="question">
        <div className="question-topic">
          {question.bestTopic &&
            <a href={`/#/topic/${question.bestTopic.id}`}>{question.bestTopic.name}</a>}
        </div>
        <div className="question-title">
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
          </div>
        </div>
      }
      </li>
    );
  }
}



export default QuestionIndexItem;
