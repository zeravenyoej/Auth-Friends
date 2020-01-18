import React from 'react';
import './App.css';
//I haven't imported withRouter but idk what that is
import { Link, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='signin'>Sign In</Link>
      </nav>

      <Route exact path='/signin' component={Signin}/>
      <PrivateRoute exact path='FriendsList' component={FriendsList}/>
    </div>
  );
}

export default App;
