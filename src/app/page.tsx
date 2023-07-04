// Components
import { ProductsCatalog } from "@/components/ProductsCatalog"

// Services
import { getProducts } from "@/services"

async function getData() {
  const res = await getProducts()

  return res
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <ProductsCatalog productsData={data} />
    </main>
  )
}
