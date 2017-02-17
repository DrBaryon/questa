import React from 'react';
import { Link } from 'react-router';

class QuestionIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.showQuestion = this.showQuestion.bind(this);
  }

  showQuestion(id){
    debugger
    this.props.router.push(`/questions/${question.id}`);
  }

  render(){
    // const tag = Object.keys(this.props.question.topics)[0];
    return(
      <li className="question" onclick={this.showQuestion(this.props.question)}>
        <h2>{this.props.question.title}</h2>
      </li>
    );
  }
}

// <h5>{tag}</h5>

export default QuestionIndexItem;
