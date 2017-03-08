import React from 'react';
import Answer from './answer';

class AnswerList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let answers = this.props.answers.map(answer =>
      <Answer key={answer.id} answer={answer}
        currentUser={this.props.currentUser}
        createComment={this.props.createComment}
        receiveAnswer={this.props.receiveAnswer}/>);
    return(
    <div>
      <div className="answers-list-header">
          {parseInt(this.props.answers.length) + " Answers"}
      </div>
      <div className="answers-list">
        {answers}
      </div>
    </div>
    );
  }
}

export default AnswerList;
