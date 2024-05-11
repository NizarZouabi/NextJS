"use client" // don't forget use client when using hooks!
import {useRouter} from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing your order")
        router.push("/")
    }
  return (<div>
    <div>Order product</div>
    <button onClick={handleClick}>Place order</button>
    </div>)
}
