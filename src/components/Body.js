import Restaurants , {promotedRestaurantCard} from "/src/components/Restaurants";
import {useEffect, useState} from "react";
import Shimmer from "/src/components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body = ()=>{
    const PromotedRestaurant=promotedRestaurantCard(Restaurants);
     
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const[filteredRestaurants,setFilteredRestaurants]=useState([]);
  


       useEffect(()=>{
              fetchData();
          },[]);

          const fetchData= async ()=>{
          const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json =await data.json();
  
          setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
          setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       };

  // console.log(listOfRestaurants);

  const [searchVal,setSearchVal]=useState("");
  const onlineCheck=useOnlineStatus();
            if(onlineCheck=="false"){
              return <h1>Check your internet connection</h1>
            }

        if(listOfRestaurants.length==0) {
              return ( <Shimmer/>)
           }
         return  (
         <div id="bodycontainer">
             <div className="flex p-4 m-4">
                <div className="search" >
                  
                    <input className=" border border-solid border-black  " type="text" value={searchVal} 
                    onChange={ 
                      (e)=>{
                         setSearchVal( e.target.value);
                        }
                      } />
                     
                    <button className="px-6 py-2 m-4 bg-green-200 rounded-lg " onClick={()=>{
                        const filtered=listOfRestaurants.filter((res)=>(
                       res.info.name.toLowerCase().includes(searchVal.toLowerCase())
                        ));
                        setFilteredRestaurants(filtered);
                      }}>Submit
                   </button>
            
                </div>
                <button className=" px-6 py-2 m-4 bg-green-200 rounded-lg" onClick={()=>{
                const newObj=listOfRestaurants.filter((res)=> res.info.avgRating>4);
                setFilteredRestaurants(newObj);
               }
             }
          >Top Rated Restaurants
       </button>
     </div>
             
            <div className="flex flex-wrap mx-16" id="restcontainer">
               
            {
                  filteredRestaurants.map((rest) => (

                        
                       <Link to={"/restaurants/"+rest.info.id} >
                        {
                          rest.promoted ? <PromotedRestaurant   key={rest.info.id}   obj={rest}/> :  <Restaurants  key={rest.info.id}   obj={rest}/> 
                        }
                          
                       </Link>
                    
                  )) 
              
                  } 
              
         </div>
      </div>
     )
 };

 export default Body;
