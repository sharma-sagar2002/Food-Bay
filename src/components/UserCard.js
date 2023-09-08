import { useState } from "react";

const UserCard=()=>{
 
  return (
    <div className="w-6/12 text-center mx-auto bg-slate-200 p-4 rounded-lg my-6 shadow-lg">
       <div className=" font-bold text-2xl my-2 p-2">
        <h1 >About</h1>
        </div>
        <div className="">Welcome to FoodBay , where convenience meets culinary delight. Our journey began in 20XX with a simple yet powerful idea: to bring the joy of diverse cuisines directly to your doorstep. We're not just an online food ordering app; we're your partners in savoring every bite .
        </div>
        <div className="my-6">
          <h1 className=" font-bold text-2xl ">Our Mission</h1>
          <div className="my-2">At FoodBay , our mission is to redefine how you experience food. We believe that great food has the power to elevate moments, and we're here to make those moments more accessible than ever. Our app is designed to seamlessly connect you with the tastes you love, whether it's a comforting bowl of ramen or a hearty vegetarian feast.
          </div>
        </div>
    </div>
  )
};
export default UserCard;