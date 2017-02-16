import React from 'react';

class QuestionIndexItem extends React.Component {
  constructor(){
    super(props);
  }

  render(){
    const tag = Object.keys(this.props.question.topics)[0];
    return(
      <div>
        <h4>this.props.question.title</h4>
        <h5>{tag}</h5>
        <p>{this.props.question.description}</p>
      </div>
    );
  }
}

export default QuestionIndexItem;
