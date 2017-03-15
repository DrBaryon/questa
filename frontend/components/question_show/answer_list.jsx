import React from 'react';
import Answer from './answer';

class AnswerList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let answers = Object.keys(this.props.question.answers);
    debugger
    return(
    <div>
      <div className="answers-list-header">
          {parseInt(answers.length) + " Answers"}
      </div>
      <div className="answers-list">
        {answers.map(key =>
          <Answer key={key}
            question={this.props.question}
            answer={this.props.question.answers[key]}
            currentUser={this.props.currentUser}
            createComment={this.props.createComment}
            updateQuestion={this.props.updateQuestion}
            receiveAnswer={this.props.receiveAnswer}/>)}
      </div>
    </div>
    );
  }
}

export default AnswerList;
