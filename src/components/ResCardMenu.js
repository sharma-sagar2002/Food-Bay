import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "/src/components/Shimmer.js";
import RestaurantCategory from "./RestaurantCategory";
const ResCardMenu=()=>{
    const obj =useParams();
   
    const [resInfo ,setResInfo]=useState([]);
    const [categoryInfo,setcategotyInfo]=useState([]);

       useEffect(()=>{
          fetchMenu();
       },[]);

       const fetchMenu= async ()=>{
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6906285&lng=77.2764329&restaurantId="+obj.resid+"&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
         
           setResInfo(json?.data?.cards);
          
       };

       
  if(resInfo.length==0) return <Shimmer/>;


   const menuData=resInfo[0].card.card.info;
   const itemInfo=resInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
   const category=resInfo[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>
   (c.card?.["card"]?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));
    console.log(category);

   return (
    <div className="menucontainer">
           <h1 className=" font-bold text-2xl my-4 text-center">{menuData.name}</h1>
           <h2 className=" font-bold text-md  my-2 text-center">{menuData.areaName} , {menuData.city}</h2>
           {
           category.map((c)=>
           (<RestaurantCategory key={c.card.card.title} data={c.card.card}/>))
           }
         
    </div>
   )
};
export default ResCardMenu ;


