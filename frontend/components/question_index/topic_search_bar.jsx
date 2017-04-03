import React from 'react';

class TopicSearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {topicName: ""}
    this.filterTopics = this.filterTopics.bind(this);
  }

  update(field) {
   return e => {
     this.setState({[field]: e.currentTarget.value}, this.filterTopics);
   };
  }

  filterTopics(){
    this.props.fetchAllTopics(this.state.topicName);
  }

  render(){
    debugger
    return (
      <div className="topic-search-bar">
        <textarea rows="1" onChange={this.update("topicName")} />
        <ul className="search-results">
          {this.props.currentUser.potentialTopics &&
            this.props.currentUser.potentialTopics.map((topic) =>
            <li key={topic.id}>
              <a href={"/#/" + topic.id}>{topic.name}</a>
            </li>
          )}
        </ul>
      </div>

    )
  }
}

export default TopicSearchBar
