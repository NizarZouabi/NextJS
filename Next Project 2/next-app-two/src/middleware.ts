import {NextResponse, type NextRequest} from "next/server"

// export function middleware(request: NextRequest){
//     if(request.nextUrl.pathname === "/profile"){
//         return NextResponse.rewrite(new URL("/hello", request.url)) //another approach
//     }
//     //return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profile" //automatically redirects to home page from /profile
// }

//with headers
export function middleware(request: NextRequest){
    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme") // cookies in middleware
    if(!themePreference){
        response.cookies.set("theme", "dark")
    }
    response.headers.set("custom-header", "custom-value") // custom header
    return response
}
