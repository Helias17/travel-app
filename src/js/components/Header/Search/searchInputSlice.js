import { createSlice } from '@reduxjs/toolkit';

export const searchInputSlice = createSlice({
  name: 'countrySearchInput',
  initialState: {
    value: ''
  },
  reducers: {
    changeInput: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    }
  }
})

export const { changeInput } = searchInputSlice.actions;

export const selectCountrySearchInput = state => {
  return state.countrySearchInput.value
};

export default searchInputSlice.reducer;