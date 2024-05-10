import Link from "next/link"

export default function ProductList() {
  const productId = 100
  return (
    <div>
        Product List:
        <ul>
            <li><Link href="products/1">Product 1</Link></li>
            <li><Link href="products/2">Product 2</Link></li>
            <li><Link href="products/3" replace>Product 3</Link></li>
            <li><Link href={`products/${productId}`}>product {productId}</Link></li>
        </ul>
        <Link href="/">Home</Link>
    </div>
  )
}
