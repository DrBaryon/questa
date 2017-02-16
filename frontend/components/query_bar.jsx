import React from 'react';

class QueryBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", description: "", showDescription: false};
    this.askQuestion = this.askQuestion.bind(this);
    this.toggleDescriptionField = this.toggleDescriptionField.bind(this);
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

  toggleDescriptionField(){
    this.setState({
      showDescription: !this.state.showDescription
    });
  }

  render(){
    let descriptionField = "";
    if (this.state.showDescription){
      descriptionField = <textarea
        className="description_field" type="text"
        onChange={this.update("description")}
        value={"Enter details here (optional)"}/>;
    }
    return(
      <div className = "query_bar">
        <h2>Questa</h2>
        <form onSubmit={this.askQuestion}>
          <div className="ask_bar">
            <input type="text" onChange={this.update("title")} />
            {descriptionField}
          </div>
          <div className="tool_bar">
            <input type="submit" value="Just Do It!"/>
            <button onClick={this.toggleDescriptionField}/>
          </div>
        </form>
      </div>
    );


  }
}

export default QueryBar;
