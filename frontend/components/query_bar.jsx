import React from 'react';

class QueryBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", description: "", showDescription: false,
      expandSearchField: true};
    this.askQuestion = this.askQuestion.bind(this);
    this.expandSearchField = this.expandSearchField.bind(this);
    this.toggleDescriptionField = this.toggleDescriptionField.bind(this);
  }

  askQuestion(e){
    e.preventDefault();
    const question = this.state;
    this.props.createQuestion(question);
  }

  clear(field) {
		return e => this.setState({
      [field]: ""
    });
	}

  update(field) {
		return e => this.setState({
      [field]: e.currentTarget.value
    });
	}

  expandSearchField(){
    this.setState({
      expandSearchField: !this.state.expandSearchField
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
        onClick={this.clear("description")}
        onChange={this.update("description")}
        value={"Enter details here (optional)"}/>;
    }
    if (this.state.expandSearchField){
      return(
        <div className = "expanded_query_bar">
          <h2>Questa</h2>
          <form onSubmit={this.askQuestion}>
            <div className="expanded_ask_bar">
              <input type="text" onChange={this.update("title")} />
              {descriptionField}
            </div>
            <div className="expanded_tool_bar">
              <input type="submit" value="Just Do It!"/>
              <button onClick={this.toggleDescriptionField}/>
            </div>
          </form>
        </div>
      );
    }
    // return (
    //   <div className = "query_bar">
    //     <h2>Questa</h2>
    //     <form onSubmit={this.askQuestion}>
    //       <div className="ask_bar">
    //         <input type="text" onChange={this.update("title")} />
    //         <button value = "AskQuestion"/>
    //       </div>
    //       <div className="tool_bar">
    //       </div>
    //     </form>
    //   </div>
    //
    // );




  }
}

export default QueryBar;
