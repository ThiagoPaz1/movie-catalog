import { render, screen } from "@testing-library/react"

// Components
import { CardProducts } from "../ListProducts/CardProducts"

describe("LisProduct component", () => {
  it("Should product title", () => {
    render(
      <CardProducts
        title="Mens Casual Premium Slim Fit T-Shirts"
        image=""
        price=""
      />
    )

    screen.getByText("Mens Casual Premium Slim Fit T-Shirts")
  })
})