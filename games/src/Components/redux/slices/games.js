import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Items: [],
  value: '',
  totalPrice: 0
};
const GameSlices = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.Items = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    }
  }
});

export const { setGames, setValue, setTotalPrice } = GameSlices.actions;
export default GameSlices.reducer;
