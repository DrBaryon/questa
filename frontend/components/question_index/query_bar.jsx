import React from 'react';
import {Link, withRouter} from 'react-router';

class QueryBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", description: "", showDescription: false,
      expanded: false};
    this.askQuestion = this.askQuestion.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.toggleDescriptionField = this.toggleDescriptionField.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   if (e.currentTarget.className === )
  // }

  componentDidMount(){
    this.setState({
      expanded: false
    });
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

  toggleExpand(){
    this.setState({
      expanded: !this.state.expanded
    });
  }

  toggleDescriptionField(){
    this.setState({
      showDescription: !this.state.showDescription
    });
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout().then(this.redirectIfLoggedOut);
  }

  redirectIfLoggedOut() {
		this.props.router.push("/login");
	}

  render(){
    let descriptionField = "";
    if (this.state.showDescription){
      descriptionField = <textarea
        className="description-field" type="text"
        onChange={this.update("description")}/>;
    }
    if (this.state.expanded){
      return(
        <form className = "expanded-query-bar" onSubmit={this.askQuestion}>
            <div className="query-bar-logo">Questa</div>
            <div className="expanded-ask-bar">
              <textarea rows="1" onChange={this.update("title")} />
              {descriptionField}
            </div>
            <div className="expanded-tool-bar">
              <input type="submit" value="Just Do It!"/>
              <button type="button" onClick={this.toggleDescriptionField}/>
            </div>
        </form>
      );
    }
    return (
      <form className = "query-bar" onSubmit={this.askQuestion}>
        <div className="query-bar-logo">Questa</div>
        <div className="ask-bar" onClick={this.toggleExpand}>
          <textarea rows="1" onChange={this.update("title")} />
          <input type="submit" value = "Ask Question"/>
        </div>
        <div className="nav-bar">
          <button className="logout-button" type="button" onClick={this.handleLogout} >Logout</button>
        </div>
      </form>
    );




  }
}

export default withRouter(QueryBar);
