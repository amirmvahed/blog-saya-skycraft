import connect from "@/lib/config/db";
import Blog from "@/lib/models/Blog";
import fs from "fs";
import path from 'path';
import {NextResponse} from "next/server";
import { revalidatePath } from 'next/cache';

type Params = {
    id: string
}

export async function GET(request, context: { params: Params }) {
    const id = context.params.id
    try {
        await connect()
        const blog = await Blog.findById(id)
        return NextResponse.json(blog, { status: 200 })
    } catch (e) {
        return NextResponse.json({ message: `An Error occurred in GET ${id} blog! ${e}`, error: e.toString() }, { status: 500 })
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
        await revalidatePath(`/blog/${id}`);
        await revalidatePath(`/`);
        return new NextResponse(JSON.stringify("Blog successfully deleted"), {status: 200});
    } catch (e) {
        return new NextResponse('An Error occurred in DELETE blogs!' + e, {status: 500});
    }
}

export async function PUT(request, context: { params: { id: number } }) {
    try {
        await connect();
        const id = context.params.id;
        const formData = await request.formData();

        // Find the blog entry
        const blog = await Blog.findById(id);

        if (!blog) {
            return new NextResponse('Blog not found', { status: 404 });
        }

        // Handle image update
        let imgUrl = blog.image;
        const newImage = formData.get('image');
        if (newImage) {
            const imageByteData = await newImage.arrayBuffer();
            const buffer = Buffer.from(imageByteData);
            const timestamp = Date.now();
            const newImagePath = `./public/${timestamp}_${newImage.name}`;

            // Delete the old image if it exists
            const oldImagePath = path.join(process.cwd(), 'public', blog.image);
            await new Promise((resolve, reject) => {
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                });
            });

            // Save the new image
            await fs.promises.writeFile(newImagePath, buffer);
            imgUrl = `/${timestamp}_${newImage.name}`;
        }

        // Update blog data
        const updatedBlogData = {
            title: formData.get('title').toString(),
            description: formData.get('description').toString(),
            category: formData.get('category').toString(),
            author: formData.get('author').toString(),
            image: imgUrl,
            authorImg: formData.get('authorImg').toString(),
        };

        await Blog.findByIdAndUpdate(id, updatedBlogData);

        // Revalidate the blog page and home page
        await revalidatePath(`/blog/${id}`);
        await revalidatePath(`/admin/blogs-list`);
        await revalidatePath(`/`);



        return new NextResponse(JSON.stringify("Blog successfully updated"), { status: 200 });
    } catch (e) {
        return new NextResponse('An Error occurred in updating the blog!' + e, { status: 500 });
    }
}
