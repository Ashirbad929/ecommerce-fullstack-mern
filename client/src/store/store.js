import { configureStore } from '@reduxjs/toolkit'
import searchSliceReducer from './slices/searchSlice';
import usersSliceReducer from './slices/usersSlice';
const store=configureStore({
    reducer:{
       user: usersSliceReducer,
       search: searchSliceReducer,

    }
    


})
export default store;