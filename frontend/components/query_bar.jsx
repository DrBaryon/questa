import React from 'react';

class QueryBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", description: ""};
    this.askQuestion = this.askQuestion.bind(this);
  }

  askQuestion(e){
    e.preventDefault();
    const question = this.state;
    this.props.createQuestion(question);
  }

  update(field) {
		return e => this.setState({
      [field]: e.currentTarget.value
    });
	}

  render(){
    return(
      <div className = "query_bar">
        <h2>Questa</h2>
        <form onSubmit={this.askQuestion}>
          <div className="ask_bar">
            <div className="titleField">
              <input type="text" onChange={this.update("title")} />
            </div>
            <div className = "descriptionField">
              <input type="text" onChange={this.update("description")}/>
            </div>
          </div>
          <div className="tool_bar">
            <input type="submit" value="This had better be good"/>
          </div>
        </form>
      </div>
    );


  }
}

export default QueryBar;
