import React from 'react';
import {Link, withRouter} from 'react-router';

class SignupForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      first_name: "", last_name: "", password: "", email: "", hidden: true
    };
    this.handleNewUser = this.handleNewUser.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
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

  toggleHidden(){
    this.setState({
      hidden: !this.state.hidden
    });
  }

  handleNewUser(e){
    e.preventDefault();
    const user = this.state;
    this.props.signup({user}).then(this.redirectIfLoggedIn);
  }

  render (){
    if (this.state.hidden){
      return (
        <a onClick={this.toggleHidden}>{"Signup with email"}</a>
      );
    }
    return (
      <form onSubmit={this.handleNewUser}>
        <h2>Signup</h2>
        <ul>
          <li>
            <label>First Name
            <input onChange={this.update("first_name")}
              value={this.state.firstName}/>
            </label>
            <label>Last Name
              <input onChange={this.update("last_name")}
                value={this.state.lastName}/>
            </label>
          </li>
          <li>
            <label>Email
              <input onChange={this.update("email")}
                value={this.state.email}/>
            </label>
          </li>
          <li>
            <label>Password
              <input onChange={this.update("password")}
                value={this.state.password}/>
            </label>
          </li>
          <li>
            <input type="submit" value="Sign Up"/>
            <a onClick={this.toggleHidden}>{"Oh nvm"}</a>
          </li>
        </ul>
      </form>
    );
  }
}

export default withRouter(SignupForm);
