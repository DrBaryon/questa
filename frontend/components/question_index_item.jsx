import React from 'react';

class QuestionIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // const tag = Object.keys(this.props.question.topics)[0];
    return(
      <li className="question">
        <h2>{this.props.question.title}</h2>
      </li>
    );
  }
}

// <h5>{tag}</h5>

export default QuestionIndexItem;
