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
        <a href={"/#/" + this.props.question.id}>{this.props.question.title}</a>
        {bestAnswer.content}
      </li>
    );
  }
}

// <h5>{tag}</h5>

export default QuestionIndexItem;
