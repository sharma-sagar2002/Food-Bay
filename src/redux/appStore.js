const { configureStore } = require("@reduxjs/toolkit");
 import cartReducer from "/src/redux/cartSlice.js";
const appStore =configureStore({

    reducer:{
       cart : cartReducer,
    }
});
export default appStore;