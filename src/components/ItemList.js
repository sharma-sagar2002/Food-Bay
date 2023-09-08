
import {addItem} from "/src/redux/cartSlice";
import { useDispatch } from "react-redux";
const ItemList=(props)=>{
    console.log(props.items);
    const dispatch=useDispatch();
    const clickHandle=(item)=>{
      //action dispatch 
        dispatch(addItem(item));
    };
  return (
    <div className="p-2 m-2" >
        {
          props.items.map((item)=>
          (
           <div key={item.card.info.id} className=" text-left  py-2 border-slate-200 border-b-2" >
            <div className="flex justify-between">
                  <div className="my-1 font-bold text-lg">{item.card.info.name} - ₹ {item.card.info.price/100||item.card.info.defaultPrice/100}</div>
                  <div className="font-bold text-md"> <button className="px-2 py-1 bg-black text-sm text-white rounded-lg" onClick={()=>clickHandle(item)} >Add +</button></div>
            </div>
                <p className="text-xsm  ">{item.card.info.description}</p>
               
                 
           </div>
          )
          )
        }
          
    </div>
  )
};
export default ItemList;