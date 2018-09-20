import * as React from 'react';

import AddUser from '../containers/AddUser'
import UserList from '../containers/UserList'
import './App.css'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to UserList</h1>
        </header>
        <AddUser/>
        <UserList/>
      </div>
    );
  }
}

export default App;
