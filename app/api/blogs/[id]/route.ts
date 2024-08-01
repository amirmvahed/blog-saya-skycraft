import connect from "@/lib/config/db";
import Blog from "@/lib/models/Blog";
import {NextResponse} from "next/server";

type Params = {
    id: string
}

export async function GET(request, context: { params: Params }) {
    const id = context.params.id
    try {
        await connect()
        const blog = await Blog.findById(id)
        return new NextResponse(JSON.stringify(blog), {status: 200});
    } catch (e) {
        return new NextResponse(`An Error occurred in GET ${id} blog! ${e}`, {status: 500});
    }

}
