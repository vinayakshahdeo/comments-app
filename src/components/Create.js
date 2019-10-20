import React, { Component } from 'react';
import uuid from 'uuid';
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', comment: '', id: uuid.v4() };
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.data.added);
    if (this.state.username !== '' && this.state.comment !== '') {
      this.props.newProps(this.state);
    } else {
      this.props.setError('Both Fields are required');
      this.setState({ title: '', comment: '', id: null });
    }
  };
  setTitle = value => {
    this.setState({ title: value });
  };
  setComment = value => {
    this.setState({ comment: value });
  };
  render() {
    return (
      <div className='App'>
        <div id='login-container'>
          <form className='form' onSubmit={this.onSubmit}>
            {this.props.data.error && (
              <p className='error'>{this.props.data.error}</p>
            )}
            {this.props.data.added && (
              <p className='success'>Ticket Created Successfully</p>
            )}
            <p>Please Add Ticket</p>
            <input
              type='text'
              placeholder='Title'
              value={this.state.title}
              onChange={e => this.setTitle(e.currentTarget.value)}
            />
            <input
              type='text'
              placeholder='Comments'
              value={this.state.comment}
              onChange={e => this.setComment(e.currentTarget.value)}
            />
            <button className='submit' type='submit'>
              Add Your ticket
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
