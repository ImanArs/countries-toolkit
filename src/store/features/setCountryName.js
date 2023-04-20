import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: null,
    isLoading: false,
    error: null,
    activeRegion: null
}

console.log(initialState);
export const fetchCountries = createAsyncThunk(
    'countries/fetch',
    async (region) => {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const data = await response.json()
      console.log(data);
      return data
    }
  )

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setActiveRegion(state, action) {
            state.activeRegion = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCountries.pending, (state) => {
            state.isLoading = true
          })
          .addCase(fetchCountries.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
          })
          .addCase(fetchCountries.rejected, (state, action) => {
            state.error = action.error.message
            state.isLoading = false
          })
      }
})
// Export the slice reducer
export const countriesReducer = countriesSlice.reducer

// Export the action creators
export const { setActiveRegion } = countriesSlice.actions