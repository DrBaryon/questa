import React from 'react';
import {Link, withRouter} from 'react-router';
import QuestionIndexItem from './question_index_item';
import QueryBar from './query_bar';

class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const questionIndexItems = this.props.questions.map(question => (
      <QuestionIndexItem key={question.id} question={question} />
    ));
    return (
      <div>
        <QueryBar createQuestion={createQuestion}/>
        <ul className="question-feed">
          {questionIndexItems}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
