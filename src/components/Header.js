import Dropdown from "./Dropdown";
 import { useState } from "react";
import { Link } from "react-router-dom";


 export const Title= ()=>

(
<a href="/">

    <img className='logo'
    
    src='https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj'
    
    alt='logo'
    />
    </a>
    
    )

// let btnName="Login";


const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    return (<div className="header" style={{backgroundColor:'#4a2632'}}>
    <Title/>
    <div className='nav-items'>
    <ul >
    <li><Link to="/">Home</Link></li>
    <li ><Link to="/about">About Us</Link> </li>
    <li  ><Link to="/contactus">Contact Us</Link></li>
    <li ><Link to="/cart">Cart</Link></li>
    <button className="login" onClick={()=>{
       if(btnName=="Login")
       setBtnName("Logout")
       else
       setBtnName("Login") 
      
    }}
    >
        {btnName}
    </button>
    </ul>
    </div>
    
  
        </div>
        )
    }



export default Header ;