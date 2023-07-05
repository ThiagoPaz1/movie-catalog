"use client"

// Types
import { CardProductsProps } from "../types"

// Utils
import { priceFormat } from "@/utils/priceFormat"

// Styles and images
import { CardProductsContainer } from "../styles/cardProductsStyles"

export function CardProducts({ title, image, price }: CardProductsProps) {
  return (
    <CardProductsContainer>
      <img src={image} alt="Imagem do produto" />
      <h3>
        {title}
      </h3>
      <p>
        {priceFormat(Number(price))}
      </p>
    </CardProductsContainer>
  )
}