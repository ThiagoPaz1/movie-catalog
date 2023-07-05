// Types
import { Product } from "@/@types"

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json()

  return data
}