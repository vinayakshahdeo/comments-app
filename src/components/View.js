import React, { Component } from 'react';
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = id => {
    this.props.deleteProps(id);
  };
  render() {
    const dataItem = this.props.dataItem.data;
    return (
      <>
        {dataItem.length ? (
          <>
            {dataItem.map(data => (
              <div className='todoItem' key={data.id}>
                <h3>Title: {data.title}</h3>
                {'\n'}
                <h3>Comment:{data.comment}</h3>
                <button
                  className='submit'
                  type='submit'
                  onClick={this.handleClick.bind(this, data.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className='App'>
              <div id='login-container'>
                <h1>No Tickets to show here</h1>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default View;
