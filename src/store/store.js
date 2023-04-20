import { configureStore } from "@reduxjs/toolkit";
import { NameCountrySlice, countriesReducer, countriesSlice } from "./features/setCountryName";

export const store = configureStore({
    reducer: {
        counries: countriesReducer
    }
})