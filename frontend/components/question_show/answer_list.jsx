import React from 'react';
import Answer from './answer';

class AnswerList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let answers = this.props.question.answers.map(answer =>
      <Answer key={answer.id}
        question={this.props.question}
        answer={answer}
        currentUser={this.props.currentUser}
        createComment={this.props.createComment}
        updateQuestion={this.props.updateQuestion}
        receiveAnswer={this.props.receiveAnswer}/>);
    return(
    <div>
      <div className="answers-list-header">
          {parseInt(this.props.question.answers.length) + " Answers"}
      </div>
      <div className="answers-list">
        {answers}
      </div>
    </div>
    );
  }
}

export default AnswerList;
