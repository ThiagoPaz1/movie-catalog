"use client"
import { useSelectorReduxState } from "@/hooks/useSelectorReduxState"

// Style and images
import { HeaderContainer } from "./styles/headerStyles"

export function Header() {
  const products = useSelectorReduxState(state => state.product.products)
  
  console.log(products)
  return (
    <HeaderContainer>
      Produtos
    </HeaderContainer>
  )
}