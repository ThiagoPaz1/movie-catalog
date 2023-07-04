// Types
import { Product } from "@/@types"

export async function getProducts(productsQuantity?: number): Promise<Product[]> {
  const limit = productsQuantity ?? 50 
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
  const data = await res.json()

  return data
}