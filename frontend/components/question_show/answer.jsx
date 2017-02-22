import React from 'react';

class Answer extends React.Component {


  render(){
    if (!this.props.answer){
      return (<h2>Loading</h2>);
    }
    return(
      <div className="answer">
        <div className = "answer-header">
          {this.props.answer.author.first_name}
        </div>
        <div className = "answer-body">
          {this.props.answer.content}
        </div>
        <div className = "answer-footer">
        </div>
      </div>
    );
  }
}

export default Answer;
