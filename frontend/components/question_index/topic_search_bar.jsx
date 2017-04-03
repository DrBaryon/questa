import React from 'react';

class TopicSearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {topicName: "", displayedTopics: [], topics: []}
    this.filterTopics = this.filterTopics.bind(this);
  }

  componentDidMount(){
    this.setState({
       topics: this.props.fetchAllTopics()
    });
  }

  update(field) {
   return e => {
     this.setState({[field]: e.currentTarget.value}, this.filterTopics);
   };
  }

  filterTopics(){
    debugger
    let searchTerm = this.state.topicName;
    let displayedTopics = this.state.topics.filter((topic) => {
      return topic.name.includes(searchTerm);
    });
    this.setState({
      displayedTopics: displayedTopics
    });
  }

  render(){
    return (
      <div>
        <textarea rows="1" onChange={this.update("topicName")} />
        <ul className="search-results">
          {this.state.displayedTopics.map((topic) =>
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
