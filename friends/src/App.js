import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';
import LogOut from './components/LogOut';
import { getToken } from './utls/api';

function App() {
  const signedIn = getToken()

  return (
    <div className="App">
      <h1>Friends App</h1>

      <nav>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/signup'>Sign Up</Link>}
        {signedIn && <Link to='/friends'>Friends</Link>}
        {signedIn && <Link to='/logout'>LogOut</Link>}
      </nav>

      <Route exact path='/signup' render={(props)=>{ return <SignUp {...props}/>}}/>
      <ProtectedRoute exact path='/friends/' component={FriendsList}/>
      <ProtectedRoute exact path='/logout/' component={LogOut}/>
    </div>
  );
}

export default withRouter(App);
