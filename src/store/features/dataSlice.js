import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    data: [],
}

export const getCountry = createAsyncThunk('country/getCountry', async(_, {rejectWithValue})=> {
    const res = await axios.get('https://restcountries.com/v3.1/all')
})

export const allSlice = createSlice({
    name: 'country',
    initialState,
    reducers: {

    }
})