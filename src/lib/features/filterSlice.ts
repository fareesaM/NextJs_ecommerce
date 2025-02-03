import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  sortBy: "price" | "rating";
  searchQuery: string;
}

const initialState: FilterState = {
  category: "all",
  sortBy: "price",
  searchQuery: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSortBy: (state, action: PayloadAction<"price" | "rating">) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCategory, setSortBy, setSearchQuery } = filterSlice.actions;
export default filterSlice.reducer;
