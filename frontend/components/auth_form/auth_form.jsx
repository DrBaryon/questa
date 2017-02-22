import React from 'react';
import {Link, withRouter} from 'react-router';
import SignupForm from './signup_form';
import LoginForm from './login_form';

class AuthForm extends React.Component{

  constructor(props){
    super(props);
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

  render(){
    return (
      <div className = "auth-form-container">
        <div className = "auth-form-big-box">
          <div className="greeting">
            <h1>Questa</h1>
            <h3> Welcome to Questa! Share your knowledge with us! </h3>
          </div>
          <div className = "auth-form-little-box" >
            <div className = "signup-form">
              <SignupForm signup={this.props.signup} />
            </div>
            <div className = "login-form">
              <LoginForm login={this.props.login}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthForm);
