import React from 'react';
import { Link, withRouter } from 'react-router';

class QuestionIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.fetchQuestion(this.props.question.id);
  }

  render(){
    // const tag = Object.keys(this.props.question.topics)[0];
    return(
      <li className="question" >
        <Link to={`${this.props.question.id}`}>
          <h2>{this.props.question.title}</h2>
        </Link>
      </li>
    );
  }
}

// <a href={`#/${this.props.question.id}`} question>

// <h5>{tag}</h5>

export default withRouter(QuestionIndexItem);
