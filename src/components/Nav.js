import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "./UserContext";
import {useSelector} from "react-redux";
const Nav=()=>{
    // let btn="login";
    const [btn,setBtn]=useState("Login");
    const checkStatus=useOnlineStatus();
    const username=useContext(UserContext);

    //subscribing to the store
    const cartItems=useSelector((store)=> (store.cart.items));
    return  (
      <div className="navbar">
      <ul className="flex my-2 "> 
          <li className="p-4 my-2 mx-1"> {checkStatus}</li>
          <li className="p-4 my-2 mx-1"><Link to={"/"} >Home</Link></li>
          <li className="p-4 my-2 mx-1"><Link to={"/about"}>About Us</Link></li>
          <li className="p-4 my-2 mx-1"><Link to={"/contactus"}>Contact Us</Link></li>
           <li className="p-4 my-2 mx-1"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="p-4 my-2 mx-1 font-bold"><Link to={"/cart"}>Cart - ({cartItems.length} items)</Link></li>
          <button className="p-4 my-2 mx-1" onClick={()=>{
            { 
            if(btn==="Login"){
                setBtn("Logout");
            }
            else {
                setBtn("Login");
            }
        }
          }}>{btn}</button>
          <li className="p-4 m-2 font-bold ">{username.loggedInUser}</li>
      </ul>
     </div>
     )
  };
  
  export default Nav;