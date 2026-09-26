import type { IProducts } from "@/types/product.interaface";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IProductState {
  products: IProducts[];
  loading: boolean;
  error: string | null;
}

// InitialState
const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("product/fetchProduct", async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return response.json();
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state,action:PayloadAction<IProducts>) => {
        const newProduct: IProducts = {
            id: Number(state.products.length + 1),
            ...action.payload,
        }

        state.products.push(newProduct)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProducts[]>) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Failed to fetch products";
    });
  },
});

export const {addProduct} = productSlice.actions;

export default productSlice.reducer;
