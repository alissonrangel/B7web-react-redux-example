import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light',
        primary: '#eeeeee',
        secondary: '#333333'
    },
    reducers: {
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        },
        setPrimaryColor: (state, action) => {
            state.primary = action.payload;
        },
        setSecondaryColor: (state, action) => {
            state.secondary = action.payload;
        }
    }
});

export const { setThemeStatus, setPrimaryColor, setSecondaryColor } = slice.actions;
export default slice.reducer;