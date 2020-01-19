import React from 'react';
import './App.css';
//I haven't imported withRouter but idk what that is
import { Link, Route, withRouter } from 'react-router-dom';
import { getToken } from './utls/api';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Signin from './components/Signin';
import Logout from './components/Logout';

function App() {
  const signedIn = getToken();

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/signin'>Sign In</Link>}
        {signedIn && <Link to='/friends'>Friends</Link>}
        {signedIn && <Link to='/logout'>Logout</Link>}
      </nav>

      <Route exact path='/signin' component={Signin}/>
      <PrivateRoute exact path='/friends' component={FriendsList}/>
      <PrivateRoute exact path='/logout' component={Logout}/>
    </div>
  );
}

export default withRouter(App);
