import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Create from './components/Create';
import View from './components/View';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
class App extends Component {
  state = {
    isLoggedIn: false, //pointer for use
    error: null, //error variable
    data: [],
    added: false
  };
  setLogin = (username, password) => {
    //allow Login
    if (username && password) {
      this.setState({ isLoggedIn: true });
      this.setState({ error: '' });
    } else {
      this.setState({ isLoggedIn: false });
      this.updateError();
    }
  };
  updateProps = propsData => {
    //update tickets
    this.setState({ error: '' })
    this.setState({ data: [...this.state.data, propsData] });
    this.setState({ added: true });
    setTimeout(() => this.setState({ added: false }), 1000);
  };
  updateError = errors => {
    //set Errors
    if (errors) {
      this.setState({ error: errors });
      setTimeout(() => this.setState({ error: '' }), 1000);
    } else {
      this.setState({ error: 'Please Login First' });
      setTimeout(() => this.setState({ error: '' }), 1000);
    }
  };
  delete = id => {
    //delete using id
    if (id) {
      let newState = this.state.data.filter(dataItem => dataItem.id !== id);
      this.setState({ data: newState });
      this.setState({ error: '' });
    } else {
      this.setState({ error: 'Invalid id' });
    }
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false, error: null, data: [] });
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <Router>
            <ul>
              <li>
                <Link to='/create'>Create ticket</Link>
              </li>
              <li>
                <Link to='/view'>View ticket</Link>
              </li>
              <li>
                {' '}
                <button type='submit' onClick={this.handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
            <Route
              exact
              path='/create'
              component={() => (
                <Create
                  data={this.state}
                  newProps={this.updateProps}
                  setError={this.updateError}
                />
              )}
            />
            <Route
              exact
              path='/view'
              component={() => (
                <View
                  dataItem={this.state}
                  deleteProps={this.delete}
                  setError={this.updateError}
                />
              )}
            />
          </Router>
        ) : (
          <Login
            data={this.state}
            updateLogin={this.setLogin}
            setError={this.updateError}
          />
        )}
      </div>
    );
  }
}

export default App;
