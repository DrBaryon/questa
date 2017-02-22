import React from 'react';

class Answer extends React.Component {


  render(){
    const answer = this.props.answer;
    return(
      <div className="answer">
        <div className = "answer-header">
          {answer.author.name}
        </div>
        <div className = "answer-body">
          {answer.content}
        </div>
        <div className = "answer-footer">
        </div>
      </div>
    );
  }
}

export default Answer;
