'use client';
import BlogFrom from "@/components/admin-components/BlogFrom";
import {BlogItemType} from "@/types";
import createFormData from "@/utils/createFormData";
import getBlogData from "@/utils/getBlogData";
import {FormEvent, useCallback, useEffect, useState} from "react";
import {toast} from "react-toastify";

interface EditBlogPropsType {
    params: { id: number }
}

export default function EditBlog({params: {id}}: EditBlogPropsType) {
    const [data, setData] = useState<BlogItemType>({
        title: '',
        description: '',
        author: 'author',
        authorImg: 'authorImg',
        category: 'Startup',
        image: ''
    });


    useEffect(() => {
        (async function getData(blogId: number) {
            const serverData = await getBlogData(blogId)
            setData(prev => ({
                ...prev,
                ...serverData
            }))
        })(id)

    }, [id])


    const updateBlogPost = useCallback(async (e: FormEvent, id: number, data: BlogItemType) => {
        e.preventDefault()

        if (!data.image) {
            toast.warning('please fill img')
        }
        const formData = createFormData(data)

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/posts/${id}`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                toast.error(`Error: ${response.statusText}`)
                throw new Error(`Error: ${response.statusText}`);
            }

            toast.success('Blog updated successfully')
            window.location.href = '/admin/blogs-list'


        } catch (error) {
            toast.error('Failed to update blog' + error)
        }
    }, [])


    return (
        <BlogFrom formHandler={(e: FormEvent) => updateBlogPost(e, id, data)} setData={setData} data={data} id={id}/>
    );
}
