import React from 'react';
import {Link, withRouter} from 'react-router';
import QuestionIndexItem from './question_index_item';
import QueryBar from '../query_bar';

class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllQuestions();
  }

  render(){
    const questionIndexItems = this.props.questions.map(question => (
      <QuestionIndexItem key={question.id} question={question} />
    ));
    // const followedTopics = this.props.currentUser.followedTopics.map(topic => (
    //   <li>{topic.name}</li>
    // ));
    return (
      <div className="homepage">
        <div className="header">
          <QueryBar createQuestion={this.props.createQuestion}/>
        </div>
        <div className="main">
          <div className="left-sidebar-container">
            <div className="left-sidebar">
              <h1>Left</h1>
              <div className="followed-topics">
                <ul>
                  {"followedTopics"}
                </ul>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="main-content-header">
              <h2>Main Content</h2>
            </div>
            <ul className="question-feed">
              {questionIndexItems}
            </ul>
          </div>
          <div className="right-sidebar-container">
            <div className="right-sidebar">
              <h1>Right</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionIndex);
