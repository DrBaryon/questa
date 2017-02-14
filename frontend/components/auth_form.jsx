import React from 'react';
import {Link, withRouter} from 'react-router';


class AuthForm extends React.Component{

  constructor(props){
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render(){
    return (
      <div className = "auth-form-container">
        <div className = "auth-form-big-box">
          Welcome to Questa!
          <br />
          Share your knowledge with us!
          <form onSubmit={this.handleSubmit} className="auth-form-box">
            <label>Username
              <input onChange={this.update("username")}>
                {this.props.username}
              </input>
            </label>
            <label>Password
              <input onChange={this.update("password")}>
                {this.props.password}
              </input>
            </label>
          </form>
        </ div>
      </div>
    );
  }
}

export default withRouter(AuthForm);
