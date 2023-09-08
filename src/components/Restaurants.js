
const Restaurants= (props) => {
    // const {resname,foodname,cuisine,stars}=props.obj;
    //destructuring in obj
   
   return   (
           
         <div className="p-4 m-4  bg-gray-200   w-60 rounded-lg hover:bg-gray-300" id="ResCard  "  >
             <img className=" w-56 rounded-lg" id="food-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.obj.info.cloudinaryImageId}></img>
             <h2 className=" font-bold text-xl my-3">{props.obj.info.name}</h2>
             <h2 className="my-2">{props.obj.info.cuisines.join(", ")}</h2>
             <h2 className="my-1">{props.obj.info.locality} , {props.obj.info.areaName}</h2>
            <h2 className="my-1">{props.obj.info.costForTwo}</h2>
             <h2 className="my-1">{props.obj.info.avgRating} stars</h2>


      
            
          </div> 
     )
 };

 export  const  promotedRestaurantCard =(Restaurants)=>{
    return  (props)=>{
        return (
            <div  >
              <label className="absolute bg-black text-white rounded-lg p-2 m-2">Promoted</label>
              <Restaurants {...props} />
            </div>
        )
    }
 };

 export default Restaurants;
 