import * as React from 'react';
import UserList from '../containers/UserList'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserList/>
      </div>
    );
  }
}

export default App;