import React from 'react'
import Home from './Comp/Home'
 function FC_Events()
{
    
    function forgot()
    {
        alert("password forgot button working")
    }
   
    
    return(
     <div>
    <button onClick={forgot}>forgot password</button>
    </div>
    )
}
export default FC_Events