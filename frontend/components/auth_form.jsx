import React from 'react';
import {Link} from 'react-router';


class AuthForm {

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
    this.props.createUser(this.state);
  }

  render(){
    return (
      <div className = "auth-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <label>
            <input onChange={this.update("username")}>
              {this.props.username}
            </input>
          </label>
          <label>
            <input onChange={this.update("password")}>
              {this.props.password}
            </input>
          </label>
        </form>
      </div>
    );
  }
}
