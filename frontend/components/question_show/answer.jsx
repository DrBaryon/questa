import React from 'react';

class Answer extends React.Component {


  render(){
    if (!this.props.answer){
      return (<h2>Loading</h2>);
    }
    return(
      <li className="answer">
        <div className = "answer-header">
          <img src={this.props.question.author.avatar_url} width="40" height="40"/>
          {this.props.answer.author.first_name + " " + this.props.answer.author.last_name}
        </div>
        <div className = "answer-body">
          {this.props.answer.content}
        </div>
        <div className = "answer-footer">
        </div>
      </li>
    );
  }
}

export default Answer;
