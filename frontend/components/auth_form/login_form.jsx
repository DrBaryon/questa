import React from 'react';
import {Link, withRouter} from 'react-router';

class LoginForm extends React.Component{

  constructor({props}){
    super(props);
    this.state = {
      password: "", email: ""
    };
    this.handleNewSession = this.handleNewSession.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
    this.logInGuest = this.logInGuest.bind(this);
  }





  update(field) {
		return e => this.setState({
      [field]: e.currentTarget.value
    });
	}

  redirectIfLoggedIn() {
		this.props.router.push("/");
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
    this.props.login({user}).then(this.redirectIfLoggedIn);
  }

  logInGuest(e){
    e.preventDefault();
    const user = {email: "guest", password: "guestlog"};
    this.props.login({user}).then(this.redirectIfLoggedIn);
  }

  render (){
    return (
      <form onSubmit={this.handleNewSession} >
        <h2>Login</h2>
        <ul>
          <li>
            <label>Email
              <input onChange={this.update("email")}
                value={this.state.email}/>
            </label></li>
          <li>
            <label>Password
              <input onChange={this.update("password")}
                value={this.state.password}/>
            </label>
          </li>
          <li>
            <input type="submit" value="Login"/>
            <button type="button" onClick={this.logInGuest}>Login as Guest</button>
          </li>
        </ul>
      </form>
    );
  }
}

export default withRouter(LoginForm);
