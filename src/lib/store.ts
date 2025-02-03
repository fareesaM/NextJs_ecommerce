import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import filterReducer from "./features/filterSlice";
import { productsApi } from "./features/productApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    [productsApi.reducerPath]: productsApi.reducer, // RTK Query API Reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
