import { configureStore } from '@reduxjs/toolkit'

import usersSlice from './slices/usersSlice';
const store=configureStore({
    reducer:usersSlice,
    


})
export default store;