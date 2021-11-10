import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom';
import Signup from './Comp/Signup';
import Home from './Comp/Home';
const routing=(
  <Router>
    <div style={{backgroundColor:'blue'}}>
      <Link to="/"></Link>
     <Route exact path="/" component={App}/>
      <div >
        <center>
        <button><Link to="/Home">Login</Link></button>
        <Route path="/Home" component={Home}/><br/>
        <button><Link to="/Signup">signup</Link></button>
         <Route path="/Signup" component={Signup}/>
          </center>
        </div>
    </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));
