import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Types
import { Product } from "@/@types"

type ProductState = {
  products: Product[]
}

type ProductPayload = Product[]

const initialState: ProductState = {
  products: []
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<ProductPayload>) => {
      state.products = [...state.products, ...action.payload]
    }
  }
})

export const { createProduct } = productSlice.actions

export const productReducer = productSlice.reducer