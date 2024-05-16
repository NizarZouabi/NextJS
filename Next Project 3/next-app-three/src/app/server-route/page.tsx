import { serverSideFunction } from "@/utils/server-utils"
import { clientSideFunction } from "@/utils/client-utils"


export default function ServerPage() {
    console.log("Server route rendered")
    // const result = serverSideFunction()
    const result = clientSideFunction()
  return (
    <div>
        <h3>ServerRoutePage</h3>
        <p>{result}</p>
    </div>
  )
}
