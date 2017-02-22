import React from 'react';
import {Link, withRouter} from 'react-router';
import QuestionIndexItem from './question_index_item';
import QueryBar from './query_bar';

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
          <QueryBar createQuestion={this.props.createQuestion}
            logout={this.props.logout}/>
        </div>
        <div className="main">
          <div className="left-sidebar-container">
            <div className="left-sidebar">
              <div className="left-sidebar-header">
                <h2>Feeds</h2>
                <a>Edit</a>
              </div>
              <ul className="topics-list">
                <li>Top Stories</li>
              </ul>
            </div>
          </div>
          <div className="main-content">
            <div className="main-content-header">
              <h2>Top Stories For You</h2>
            </div>
            <ul className="question-feed">
              {questionIndexItems}
            </ul>
          </div>
          <div className="right-sidebar-container">
            <div className="right-sidebar">
              <div className="right-sidebar-header">
                <h2>Setup Your Account</h2>
              </div>
              <ul className="right-sidebar-tasklist">
                <li><a>Visit your feed</a></li>
                <li><a>Follow 10 more topics</a></li>
                <li><a>Find your friends on Quora</a></li>
                <li><a>Upvote 5 more good answers</a></li>
                <li><a>Ask your first question</a></li>
                <li><a>Add info about what you know</a></li>
                <li><a>Answer a question</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionIndex);
