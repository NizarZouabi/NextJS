import { type NextRequest } from "next/server" //method outdated check docs
import { redirect } from "next/navigation"
import { comments } from "../data";

export async function GET(_request: Request,
    {params}:{params:{id:string}}
){
    if(parseInt(params.id) > comments.length){
        redirect("/comments");
    }
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    )
    return Response.json(comment)
}

// export async function GET(request: NextRequest) { //outdated
//     const searchParams = request.nextUrl.searchParams
//     const query = searchParams.get("query")
//     const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments
//     return Response.json(filteredComments);
// }

// export async function GET(_request: Request, //_ to prefix request param since its not being used
//     {params}: {params: {id: string}}
// ) {
//     const comment = comments.find( comment => comment.id === parseInt(params.id)
// )
//     return Response.json(comment)
// }

export async function PATCH(request: Request,
    {params}: {params:{id:string}}) {
        const body = await request.json()
        const {text} = body
        const index = comments.findIndex(
            (comment) => comment.id === parseInt(params.id)
        )
        comments[index].text = text;
    return Response.json(comments[index])
}

export async function DELETE(request: Request,
    {params}: {params:{id:string}}) {
        const index = comments.findIndex(
            (comment) => comment.id === parseInt(params.id)
        )
        const deletedComment = comments[index]
        comments.splice(index, 1)
        return Response.json(deletedComment)
}

