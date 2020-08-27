import React, { Component } from 'react';


import AddUser from '../src/components/Form/index'
import GetUser from '../src/components/DataFetching/index'



export default class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <AddUser />
        </div>
        <div><GetUser /></div>
      </>

    );
  }
}