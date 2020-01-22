import React from 'react';
import { Route } from 'react-router-dom';;
import './App.css';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route exact path='/signup' render={(props)=>{<SignUp {...props}/>}}/>
    </div>
  );
}

export default App;
