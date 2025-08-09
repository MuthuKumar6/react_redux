
import { configureStore } from "@reduxjs/toolkit"
import listingReducers from "./slice";

const store = configureStore({
    reducer: {
        listing: listingReducers
    }
})

export default store;