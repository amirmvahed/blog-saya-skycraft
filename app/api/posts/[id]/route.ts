import connect from "@/lib/config/db";
import Blog from "@/lib/models/Blog";
import fs from "fs";
import path from 'path';
import {NextRequest, NextResponse} from "next/server";
import {revalidatePath} from 'next/cache';
import {promisify} from 'util';

type Params = {
    id: string
}
type Context = {
    params: Params
}

const unlinkAsync = promisify(fs.unlink);

export async function GET(request: NextRequest, context: Context) {
    const id = context.params.id
    try {
        await connect()
        const blog = await Blog.findById(id)
        return NextResponse.json(blog, {status: 200})
    } catch (e: any) {
        return NextResponse.json({
            message: `An Error occurred in GET ${id} blog! ${e}`,
            error: e.toString()
        }, {status: 500})
    }

}

export async function DELETE(request: NextRequest, context: Context) {
    try {
        await connect()
        const id = context.params.id
        const blog = await Blog.findById(id)

        // Construct the path to the image
        const imagePath = path.join(process.cwd(), 'public', blog.image);

        // Delete the image file
        await unlinkAsync(imagePath);

        await Blog.findByIdAndDelete(id)
        await revalidatePath(`/blog/${id}`);
        await revalidatePath(`/`);
        return new NextResponse(JSON.stringify("Blog successfully deleted"), {status: 200});
    } catch (e: any) {
        return new NextResponse('An Error occurred in DELETE blogs!' + e, {status: 500});
    }
}


export async function PUT(request: NextRequest, context: Context) {
    try {
        await connect();
        const id = context.params.id;
        const formData = await request.formData();

        // Find the blog entry
        const blog = await Blog.findById(id);

        if (!blog) {
            return new NextResponse('Blog not found', {status: 404});
        }

        // Handle image update
        let imgUrl = blog.image;
        const newImage = formData.get('image');
        if (newImage && typeof newImage !== "string") {
            const imageByteData = await newImage.arrayBuffer();
            const buffer = Buffer.from(imageByteData);
            const timestamp = Date.now();
            const newImagePath = `./public/${timestamp}_${newImage.name}`;

            // Delete the old image if it exists
            const oldImagePath = path.join(process.cwd(), 'public', blog.image);
            await unlinkAsync(oldImagePath);

            // Save the new image
            await fs.promises.writeFile(newImagePath, buffer);
            imgUrl = `/${timestamp}_${newImage.name}`;
        }


        // Update blog data
        const updatedBlogData = {
            title: formData.get('title')?.toString() || '',
            description: formData.get('description')?.toString() || '',
            category: formData.get('category')?.toString() || '',
            author: formData.get('author')?.toString() || '',
            image: imgUrl,
            authorImg: formData.get('authorImg')?.toString() || '',
        };

        await Blog.findByIdAndUpdate(id, updatedBlogData);

        // Revalidate the blog page and home page
        await revalidatePath(`/blog/${id}`);
        await revalidatePath(`/admin/blogs-list`);
        await revalidatePath(`/`);

        return new NextResponse(JSON.stringify("Blog successfully updated"), {status: 200});
    } catch (e: any) {
        return new NextResponse('An Error occurred in updating the blog!' + e, {status: 500});
    }
}
