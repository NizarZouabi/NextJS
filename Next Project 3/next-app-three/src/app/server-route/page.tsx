import { serverSideFunction } from "@/utils/server-utils"


export default function ServerPage() {
    console.log("Server route rendered")
    const result = serverSideFunction()
  return (
    <div>
        <h3>ServerRoutePage</h3>
        <p>{result}</p>
    </div>
  )
}
