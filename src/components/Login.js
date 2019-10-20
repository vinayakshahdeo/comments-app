import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.updateLogin(this.state.username, this.state.password);
  };
  setUsername = value => {
    this.setState({ username: value });
  };
  setPassword = value => {
    this.setState({ password: value });
  };
  render() {
    return (
      <div className='App' onSubmit={this.onSubmit}>
        <div id='login-container'>
          <form className='form'>
            {this.props.data.error && (
              <p className='error'>{this.props.data.error}</p>
            )}
            <p>Please Login</p>
            <input
              type='text'
              placeholder='username'
              value={this.state.username}
              onChange={e => this.setUsername(e.currentTarget.value)}
            />
            <input
              type='password'
              placeholder='password'
              value={this.state.password}
              onChange={e => this.setPassword(e.currentTarget.value)}
            />
            <button className='submit' type='submit'>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
