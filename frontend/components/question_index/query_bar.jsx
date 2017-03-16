import React from 'react';
import {Link, withRouter} from 'react-router';

class QueryBar extends React.Component {
   constructor(props){
     super(props);
     this.state = {title: "", description: "", showDescription: false,
      expanded: false, displayedQuestions: []};
     this.askQuestion = this.askQuestion.bind(this);
    this.filterQuestions = this.filterQuestions.bind(this);
     this.toggleExpand = this.toggleExpand.bind(this);
     this.toggleDescriptionField = this.toggleDescriptionField.bind(this);
     this.goHome = this.goHome.bind(this);
     this.handleLogout = this.handleLogout.bind(this);
     this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
   }

   componentDidMount(){
     this.setState({
       expanded: false
    });
  }

  askQuestion(e){
    e.preventDefault();
    const question = this.state;
    this.props.createQuestion(question).then(action => {
      this.props.router.push(`/${action.question.id}`);
     });
   }

  filterQuestions(){
    let searchTerm = this.state.title;
    let displayedQuestions = this.props.questions.filter((question) => {
      return question.title.includes(searchTerm);
    });
    this.setState({
      displayedQuestions: displayedQuestions
    });
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
		return e => {
      this.setState({[field]: e.currentTarget.value}, this.filterQuestions);
    };
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

  goHome(e){
    e.preventDefault();
    this.props.router.push("/");
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
        <div className="expanded-query-bar-container">
          <form className = "expanded-query-bar" onSubmit={this.askQuestion} onClick={null}>
              <div className="query-bar-logo" onClick={this.goHome}>Questa</div>
               <div className="expanded-ask-bar">
                 <textarea rows="1" onChange={this.update("title")} />
                 {descriptionField}
                <ul className="search-results">
                  {this.state.displayedQuestions.map((question) =>
                    <li key={question.id}>
                      <a href={"/#/" + question.id}>{question.title}</a>
                    </li>
                  )}
                </ul>
               </div>
               <div className="expanded-tool-bar">
                 <input type="submit" value="Just Do It!"/>
                 <button type="button" onClick={this.toggleDescriptionField}>Add Description</button>
               </div>
           </form>


           <div className="grey-modal" onClick={this.toggleExpand} />
         </div>

      );
    }
    return (
       <form className = "query-bar" onSubmit={this.askQuestion}>
         <div className="query-bar-logo" onClick={this.goHome}>Questa</div>
         <div className="ask-bar" onClick={this.toggleExpand}>
          <textarea rows="1" onChange={this.update("title")} />
          <textarea rows="1" />
           <input type="submit" value = "Ask Question"/>
         </div>
         <div className="nav-bar">
          <button>Read</button>
          <button>Answer</button>
          <button>Notifications</button>
          <button className="logout-button" type="button" onClick={this.handleLogout} >Logout</button>
        </div>
      </form>
    );




  }
}

export default withRouter(QueryBar)
