"use client"

// Types
import { CardProductsProps } from "../types"

export function CardProducts({ title, image, price }: CardProductsProps) {
  return (
    <li>
      <img src={image} alt="Imagem do produto" />
      <h3>
        {title}
      </h3>
      <p>
        {price}
      </p>
    </li>
  )
}