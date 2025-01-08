import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishListSlice from "./slices/wishlistSlice"

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice,
        wishlistReducer: wishListSlice,
    },
})

export default cartStore;