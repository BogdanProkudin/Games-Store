import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItem: [],
  totalPrice: 0,
  cartVisible: false
};

const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddItems: (state, action) => {
      state.cartItem.push(action.payload);
    },
    ReduceCount: (state, action) => {
      const find = state.cartItem.find(obj => {
        return obj.id === action.payload.id;
      });
      if (find && find.count > 0) {
        find.count--;
      }
      state.totalPrice = state.cartItem.reduce((acc, obj) => {
        return obj.price * obj.count + acc;
      }, 0);
    },
    AddCount: (state, action) => {
      const find = state.cartItem.find(obj => {
        return obj.id === action.payload.id;
      });
      if (find) {
        find.count++;
      }
      state.totalPrice = state.cartItem.reduce((acc, obj) => {
        return obj.price * obj.count + acc;
      }, 0);
    },

    RemoveItems: (state, actions) => {
      state.cartItem = state.cartItem.filter(obj => {
        return obj.id !== actions.payload.id;
      });
      state.totalPrice = state.totalPrice - actions.payload.price * actions.payload.count;
    },
    ClearCart: (state, actions) => {
      state.cartItem = [];
      state.totalPrice = 0;
    },
    setCartVisible: (state, actions) => {
      state.cartVisible = actions.payload;
    }
  }
});
export const { AddItems, ReduceCount, AddCount, RemoveItems, ClearCart, setCartVisible } =
  CartSlice.actions;

export default CartSlice.reducer;
