"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"

// Components
import { Header } from "./Header"

// Redux
import { createProduct } from "@/redux/features/product"

// Types
import { ProductsCatalogProps } from "./types"

export function ProductsCatalog({ productsData }: ProductsCatalogProps) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(createProduct(productsData))
  }, [])

  return (
    <Header />
  )
}