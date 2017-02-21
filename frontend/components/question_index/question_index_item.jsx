import React from 'react';

class QuestionIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {question: this.props.question, bestAnswer: ""};
    if (!!this.props.question.answers[1]){
      this.state.bestAnswer = this.question.answers[1];
    }
  }

  render(){
    // const tag = Object.keys(this.props.question.topics)[0];
    return(
      <li className="question">
        <a>{this.state.question.title}</a>
        {this.state.bestAnswer}
      </li>
    );
  }
}

// <h5>{tag}</h5>

export default QuestionIndexItem;
