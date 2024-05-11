import { Metadata } from "next"

export const generateMetadata = ({params}: Props): Metadata => { // can also be defined as async function
  return {
    title: `Product ${params.productId}`
  }
}

type Props = {
  params: {
    productId: String
  }
}

export default function ProductDetails({params}: {params:{productId:string}}) {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  )
}
//Dynamic Route