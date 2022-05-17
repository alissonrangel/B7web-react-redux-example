import {createSlice} from '@reduxjs/toolkit';


export const slice = createSlice({
  name: 'user',
  initialState:{
    name: "Alisson",
    age: 140
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    }
  }
});

export const { setName, setAge } = slice.actions;

export default slice.reducer;