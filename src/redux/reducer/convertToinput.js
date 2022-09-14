import { createSlice } from "@reduxjs/toolkit";
const initialState={
    editpr:false 
}
const convertor=createSlice({
    name:'covertor',
    initialState,
    reducers:{
        changeEditpr(state){
          state.editpr=true
        }
      }
})
export const {changeEditpr}=convertor.actions
export default convertor.reducer;
