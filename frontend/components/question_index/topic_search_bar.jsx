import React from 'react';

class TopicSearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {topicName: ""};
    this.filterTopics = this.filterTopics.bind(this);
    this.followTopic = this.followTopic.bind(this);
  }

  update(field) {
   return e => {
     this.setState({[field]: e.currentTarget.value}, this.filterTopics);
   };
  }

  followTopic(topic) {
    return e => {
      this.props.addFollow({topic_id: topic.id});
    }
  }



  filterTopics(){
    this.props.fetchAllTopics(this.state.topicName);
  }

  render(){
    return (
      <div className="topic-search-bar">
        <input type="text" onInput={this.update("topicName")} />
        <ul className="search-results">
          {this.props.currentUser.potentialTopics &&
            this.props.currentUser.potentialTopics.map((topic) =>
            <li key={topic.id} onClick={this.followTopic(topic)}>
              {topic.name}
            </li>
          )}
        </ul>
      </div>

    );
  }
}

export default TopicSearchBar;
