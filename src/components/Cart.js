import { useDispatch } from "react-redux";
import {clearCart} from "/src/redux/cartSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "./ItemList";
import CartMenu from "./CartMenu";
import { removeItem } from "../redux/cartSlice";
const Cart=()=>{

  const cartItems=useSelector((store)=>(store.cart.items));
  const dispatch=useDispatch();
  const clearHandler=()=>{
     dispatch(clearCart());
  }
  const removeHandler=()=>{
    dispatch(removeItem());
  }
    return (


        <div className="cart">
          <div className="text-center">
                <h1 className="font-bold text-2xl text-center my-3"> Cart</h1>
             
                <button className="px-3 py-1 bg-black text-white  rounded-lg my-4 mx-8 " onClick={clearHandler} >Clear Cart</button> 
                <button className="px-3 py-1 bg-black text-white  rounded-lg my-4 mx-6"  onClick={removeHandler}>Remove Item</button>
           </div> 
      {
          (cartItems.length==0)&&<div className="text-center">Cart is empty ! Please add some items .</div>
      } 
      
        <div className="w-6/12 p-4 m-auto  rounded-lg"><CartMenu  items={cartItems}/></div>
     
           
              
        </div>
    )
};
export default Cart;