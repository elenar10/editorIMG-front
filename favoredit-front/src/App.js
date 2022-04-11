import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
// import logo from './logo.svg';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Route path="/signIn">
        <Register></Register>
        </Route>
        <Route path="/login">
      <Login></Login>
      </Route>
      {/* <Route path="/edit/:id">
        <Edit></Edit>
      </Route> */}
      {/* <Route path="/landing">
        <Landing></Landing>
      </Route> */}
      <Route path="/">
        <Home></Home>
      </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
