import connect from "@/lib/config/db";
import Blog from "@/lib/models/Blog";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function GET(request) {
    try {
        await connect()
        const blogs = await Blog.find({})
        return new NextResponse(JSON.stringify(blogs), {status: 200});
    } catch (e) {
        return new NextResponse('An Error occurred in GET blogs!' + e, {status: 500});
    }

}

export async function POST(request) {
    try {
        await connect()
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: formData.get('title').toString(),
            description: formData.get('description').toString(),
            category: formData.get('category').toString(),
            author: formData.get('author').toString(),
            image: imgUrl,
            authorImg: formData.get('authorImg').toString(),
        };

        await Blog.create(blogData);
        return new NextResponse('Blog Added', {status: 200});
    } catch (e) {
        return new NextResponse('An Error occurred in POST a blog!' + e, {status: 500});
    }
}
