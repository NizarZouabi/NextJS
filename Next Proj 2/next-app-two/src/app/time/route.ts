export const dynamic = "force-dynamic"; "auto"

export async function GET(){
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}