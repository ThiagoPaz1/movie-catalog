"use client"

// Components
import { CardProducts } from "./CardProducts"

// Hooks and contexts
import { useSelectorReduxState } from "@/hooks/useSelectorReduxState"

export function ListProducts() {
  const products = useSelectorReduxState(state => state.product.products)

  return (
    <ul>
      {
        products.map(i => <CardProducts key={i.id} />)
      }
    </ul>
  )
}