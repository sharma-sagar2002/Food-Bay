import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Nav from  "/src/components/Nav.js";
import Body from "/src/components/Body.js";
import Header from "/src/components/Header.js";
import Restaurants from "/src/components/Restaurants.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import ResCardMenu from "./components/ResCardMenu";
import { useState,useEffect } from "react";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
//  import Grocery  from "./components/Grocery";
const Grocery =lazy( ()=> (import("./components/Grocery")));
const AppContainer=()=>{
  
 const [userName,setUserName]=useState();
 
 //Authentication 
 useEffect(()=>{
  const data={
    name: "Sagar Sharma",
  };
  setUserName(data.name);
 },[]);



     return ( 
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName}}>
      <div className="appcontainer">
          <Header/>
          <Outlet/>
        </div>
      </UserContext.Provider>
      </Provider> 
         )
   
       
  
};

const rootele=createBrowserRouter([
   {
      path:"/",
      element:<AppContainer/>,
      children:[
         {
                path:"/",
                element:<Body/>,
         },

       {
           path:"/contactus",
           element:<Contact/>,
       },
       {
           path:"/about",
           element:<About/>,
       },
       {
         path:"/cart",
         element:<Cart/>,

       },
       {
         path:"/restaurants/:resid",
         element:<ResCardMenu/>,
       },
       {
          path :"/grocery",
          element:<Suspense fallback={"Loading..."}><Grocery/></Suspense>,
       },
    ],
      errorElement:<Error/>,
   },
 
  
  
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rootele}/>);