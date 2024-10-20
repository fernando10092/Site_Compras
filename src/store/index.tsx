import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './reducers/carrinhoReducer';
import api from '../services/api';

export const store = configureStore({
    reducer: { carrinho: carrinhoReducer,
        [api.reducerPath]: api.reducer
     },

     middleware: (getDefaultMiddleaware)=> getDefaultMiddleaware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch