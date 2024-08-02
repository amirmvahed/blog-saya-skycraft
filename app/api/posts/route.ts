import connect from "@/lib/config/db";
import Blog from "@/lib/models/Blog";
import {NextRequest, NextResponse} from "next/server";
import {writeFile} from "fs/promises";
import {revalidatePath} from 'next/cache';

export async function GET() {
    try {
        await connect()
        const blogs = await Blog.find()
        return NextResponse.json(blogs, {status: 200})
    } catch (e: any) {
        return NextResponse.json({message: 'An Error occurred in GET blogs!', error: e.toString()}, {status: 500})
    }
}

export async function POST(request: NextRequest) {
    try {
        console.log('######### 50 #########')
        await connect()
        console.log('######### 60 #########')
        const formData = await request.formData();
        const timestamp = Date.now();

        console.log('######### 100 #########')

        const image = formData.get('image');
        let imgUrl = ''
        if (image && typeof image !== "string") {
            const imageByteData = await image.arrayBuffer();
            const buffer = Buffer.from(imageByteData);
            const path = `./public/${timestamp}_${image.name}`;
            await writeFile(path, buffer);
            imgUrl = `/${timestamp}_${image.name}`;
        }

        console.log('######### 200 #########')
        const blogData = {
            title: formData.get('title')?.toString() || '',
            description: formData.get('description')?.toString() || '',
            category: formData.get('category')?.toString() || '',
            author: formData.get('author')?.toString() || '',
            image: imgUrl,
            authorImg: formData.get('authorImg')?.toString() || ''
        };

        console.log('######### 300 #########')
        await Blog.create(blogData);
        await revalidatePath(`/`);
        console.log('######### 400 #########')
        return NextResponse.json({message: 'Blog Added'}, {status: 200});
    } catch (e: any) {
        console.log('######### 500 #########')
        return NextResponse.json({message: 'An Error occurred in POST a blog!', error: e.toString()}, {status: 500});
    }
}
