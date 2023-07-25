import { configureStore } from '@reduxjs/toolkit'
import searchSliceReducer from './slices/searchSlice';
import usersSliceReducer from './slices/usersSlice';
import AddToCartReducer from './slices/cartSlice'
import drawerSliceReducer from './slices/drawerSlice';
const store=configureStore({
    reducer:{
       user: usersSliceReducer,
       search: searchSliceReducer,
       cart:AddToCartReducer,
       drawer:drawerSliceReducer

    }
    


})
export default store;