import { Suspense } from "react"

import { Product } from "@/components/product"
import { Reviews } from "@/components/reviews"

export default function ProductDetail() {
  return (
    <div>
        <h1>Product detail page</h1>
        <Suspense fallback={<p>Loading product details...</p>}>
          <Product />
        </Suspense>
        <Suspense fallback={<p>Loading reviews details...</p>}>
          <Reviews />
        </Suspense>
    </div>
  )
}
