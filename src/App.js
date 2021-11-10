import logo from './logo.svg';
 import './App.css';
import React from 'react';
import reactDom from 'react-dom';
import FC_Events from './FC_Events';
import Trademark from './Images/trademark.png'
import Signup from './Comp/Signup';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom';
const appStyle = {
    height: '250px',
    display: 'flex'
};
const formStyle = {
    margin:'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: 'yellow',
    color:'black',
    width: '220px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        
      </form>
    );
};


const App = () => {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div >
    <center>
    <h1>IMPORT && EXPORT WEBSITE ALL IN ONE SERVICE</h1>
   
   <img src={Trademark} set height={150} width={150}></img>
      </center>
    <Form onSubmit={handleSubmit} />
    <center>
    <FC_Events/>
      </center>
      </div>
     
    );
};
 export default App;