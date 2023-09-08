import { useState } from "react";

const useOnlineStatus=()=>{
 const [onlineStatus,setOnlineStatus]=useState("Online");
 window.addEventListener("online",()=>{
     setOnlineStatus("Online");
 });
 window.addEventListener("offline",()=>{
    setOnlineStatus("Offline");
 });
 return onlineStatus;

};
export default useOnlineStatus;