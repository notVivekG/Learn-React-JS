import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        // You can add more slices here as your application grows
    },
});

export default store; 
