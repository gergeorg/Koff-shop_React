import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    const token = state.auth.accessToken;

    try {
      const responce = await fetch(`${API_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!responce.ok) {
        throw new Error('Не удалось загрузить содержимое корзины');
      }

      return await responce.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addProducrToCart = createAsyncThunk(
  'cart/addProducrToCart',
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();

    const token = state.auth.accessToken;

    try {
      const responce = await fetch(`${API_URL}/api/cart/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!responce.ok) {
        throw new Error('Не удалось добавить товар в корзину');
      }

      return await responce.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingRemove: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default cartSlice.reducer;
