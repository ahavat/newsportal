import React, { Component } from 'react';
import GetUser from '../src/components/Dashboard'

export default class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <GetUser />
        </div>
      </>

    );
  }
}