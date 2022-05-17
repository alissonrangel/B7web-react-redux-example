import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light',
        backgroundColor: '#eeeeee',
        textColor: '#333333'
    },
    reducers: {
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        },
        setBackColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
        setTextColor: (state, action) => {
            state.textColor = action.payload;
        }
    }
});

export const { setThemeStatus, setBackColor, setTextColor } = slice.actions;
export default slice.reducer;