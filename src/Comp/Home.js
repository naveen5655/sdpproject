import React, { Component } from 'react'
import photo from '../Images/diwali.jpg'
class Home extends React.Component
{
    render()
    {
        return (
        <div style={{backgroundColor:"yellow"}} >
            <h1 style={{color:"red"}}>WELCOME TO IMPORT && EXPORT WEBSITE ALL IN ONE SERVICE</h1>
            <input type="search" search="search" placeholder=" 🔍search for product "></input>
            <img src={photo} set height={500} width={1500}></img>
            
        </div> 
        )
    }

}
export default Home;