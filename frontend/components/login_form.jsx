import React from 'react';
import {Link, withRouter} from 'react-router';

export default class LoginForm extends React.Component{

  constructor({props}){
    super(props);
    this.state = {
      password: "", email: ""
    };
    this.handleNewSession.bind(this);
  }



  update(field) {
		return e => this.setState({
      [field]: e.currentTarget.value
    });
	}

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
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

  handleNewSession(e){
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  render (){
    return (
      <form onSubmit={this.handleNewSession} >
        <h2>Login</h2>
        <label>Email
          <input onChange={this.update("email")}
            value={this.state.email}/>
        </label>
        <label>Password
          <input onChange={this.update("password")}
            value={this.state.password}/>
        </label>
        <br/>
        <input type="submit" value="Log In"/>
      </form>
    );
  }
}
