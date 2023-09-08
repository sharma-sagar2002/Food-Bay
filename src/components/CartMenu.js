import {addItem} from "/src/redux/cartSlice";
import { useDispatch } from "react-redux";
const CartMenu=(props)=>{
    console.log(props.items);
    const dispatch=useDispatch();
    const clickHandle=(item)=>{
      //action dispatch 
        dispatch(addItem(item));
    };
  return (
    <div className="p-4 m-2 " >
        {
          props.items.map((item)=>
          (
           <div key={item.card.info.id} className=" text-left  py-2 border-slate-200 border-b-2" >
            <div className="flex justify-between">
                  <div className="my-1 font-bold text-lg">{item.card.info.name} - ₹ {item.card.info.price/100||item.card.info.defaultPrice/100}</div>
                 
            </div>
                <p className="text-xsm  ">{item.card.info.description}</p>
               
                 
           </div>
          )
          )
        }
          
    </div>
  )
};
export default CartMenu;