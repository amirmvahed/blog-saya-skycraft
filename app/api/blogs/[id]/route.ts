import connect from "@/lib/config/db";
import Blog from "@/lib/models/Blog";
import fs from "fs";
import path from 'path';
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

export async function DELETE(request, context: { params: Params }) {
    try {
        await connect()
        const id = context.params.id
        const blog = await Blog.findById(id)

        // Construct the path to the image
        const imagePath = path.join(process.cwd(), 'public', blog.image);

        // Delete the image file
        await new Promise((resolve, reject) => {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });

        await Blog.findByIdAndDelete(id)
        return new NextResponse(JSON.stringify("Blog successfully deleted"), {status: 200});
    } catch (e) {
        return new NextResponse('An Error occurred in DELETE blogs!' + e, {status: 500});
    }
}
