import React, { Component } from 'react'

class Signup extends React.Component
{
    render()
    {
        return (
        <div style={{backgroundColor:"yellow"}} >
            <h1 style={{color:"red"}}>WELCOME TO IMPORT SIGN PAGE</h1>
       <input type="text" name="name" placeholder="Entername" ></input><br></br>
       <input type="password" password="password" placeholder="enter password"></input><br/>
       <input type="number" number="mobile number" placeholder="enter mobile number"></input><br/>
       <input type="text" email="email" placeholder="enter email"></input>
        </div> 
        )
    }

}
export default Signup;