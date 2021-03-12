import { configureStore } from '@reduxjs/toolkit'
import searchInputReducer from '@js/components/Header/Search/searchInputSlice';

export default configureStore({
  reducer: {
    countrySearchInput: searchInputReducer
  }
})