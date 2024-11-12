
import { createSlice,configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';





  const initialState={counter:0,showCounter:true,isAuthencated:false}
 
  const counterSlice=createSlice({
    
    name:'counter',
    initialState,
    reducers:{
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter-- 
        },
        increaseCounter(state,action) {
            state.counter=state.counter+action.payload
        },
        toggleCounter(state) {
           state.showCounter=!state.showCounter 
        } ,
        AuthenticationHandler(state){
          state.isAuthencated=!state.isAuthencated
        }  
      }
  })


  const store=configureStore({
    reducer:{counter:counterSlice.reducer,ui:uiSlice.reducer}
  });

  export const {increment,decrement,increaseCounter,toggleCounter,AuthenticationHandler}=counterSlice.actions 
  export default store;