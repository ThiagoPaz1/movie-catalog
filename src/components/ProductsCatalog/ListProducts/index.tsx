"use client"

// Components
import { CardProducts } from "./CardProducts"

// Hooks and contexts
import { useSelectorReduxState } from "@/hooks/useSelectorReduxState"

// Styles and images
import { ListProductsContainer } from "../styles/listProductsStyles"

export function ListProducts() {
  const products = useSelectorReduxState(state => state.product.products)

  return (
    <ListProductsContainer>
      {
        products.map(i =>
          <CardProducts
            key={i.id}
            title={i.title}
            image={i.image}
            price={i.price}
          />
        )
      }
    </ListProductsContainer>
  )
}