import React from 'react';
import {Link, withRouter} from 'react-router';
import QuestionIndexItem from '../question_index/question_index_item';
import QueryBar from '../question_index/query_bar';

class TopicShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchTopic(this.props.params.id);
  }

  render(){
    if (!this.props.topic.questions){
      return (<h2>Loading</h2>);
    }
    const questions = Object.keys(this.props.topic.questions).map(
      key => this.props.topic.questions[key]);
    return (
      <div className="topic-page">
        <QueryBar createQuestion={this.props.createQuestion}
          logout={this.props.logout}
          questions={this.props.topic.questions}/>
        <div className="topic-header">
          {this.props.topic.name}
        </div>
        <div className="topic-nav-bar">

        </div>
        <div className="main">
          <div className="main-content">
            <div className="main-content-header">
              <h2>Feed</h2>
            </div>
            <ul className="question-feed">
              {questions.map(question => (
                <QuestionIndexItem key={question.id} question={question} />
              ))}
            </ul>
          </div>
            <div className="right-sidebar">
              <div className="about-topic">
                <h3>About</h3>
              </div>
              <div className="topic-stats">
                <div className="topic-table-cell"></div>
                <div className="topic-table-cell"></div>
                <div className="topic-table-cell"></div>
              </div>
              <div className="related-topics">
                <h3>Related Topics</h3>
                <ul className="related-topics-list">
                </ul>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TopicShow);
