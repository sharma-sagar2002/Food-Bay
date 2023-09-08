import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory =(props)=>{
 const [toggle,setToggle] =useState(false);
 const handleClick=()=>{
    if(toggle) setToggle(false);
    else setToggle(true);
 }
 return (
       
    //  Accordian
        
            <div className="w-6/12   m-auto bg-slate-100 my-4 p-3 cursor-pointer shadow-lg rounded-md"  onClick={handleClick}>
                <div className="flex justify-between">
               <span className="font-bold text-lg">{props.data.title} ({props.data.itemCards.length})</span>
               <span>⬇️</span>
               
               </div>
               <div className=" text-center">
               { 
                
                   toggle && <ItemList items={props.data.itemCards}/>
                 

               } 
               </div>
             
            </div>

        
       

     )
};

export default RestaurantCategory;