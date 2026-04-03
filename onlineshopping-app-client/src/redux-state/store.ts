import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice'; // import the reducers from the slice 

export default configureStore({
  reducer: {
    cartCounter: cartSlice
  }
});