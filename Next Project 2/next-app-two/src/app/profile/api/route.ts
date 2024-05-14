import {type NextRequest } from "next/server"
import { headers, cookies } from 'next/headers'

export async function GET(request: NextRequest) { // first approach
    const requestHeaders = new Headers(request.headers)
    const theme = request.cookies.get("theme") //Cookies first approach
    cookies().set("resultsPerPage", "20") // Cookies second approach using next cookies method

    console.log(theme)
    console.log(cookies().get("resultsPerPage"))
    console.log(requestHeaders.get("Authorization"))

    return new Response("<h1>Profile API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"  //Cookies first approach
        }
    })
}

// export async function GET() { // second approach with next headers method
//     const headerList = headers()

//     console.log(headerList.get("Authorization"))

//     return new Response("Profile API Data")
// }

