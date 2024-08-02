'use client';
import BlogFrom from "@/components/admin-components/BlogFrom";
import {BlogItemType} from "@/types";
import createFormData from "@/utils/createFormData";
import getBlogData from "@/utils/getBlogData";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function EditBlog({params: {id}}) {
    const [data, setData] = useState<BlogItemType>({
        title: '',
        description: '',
        author: 'author',
        authorImg: 'authorImg',
        category: 'Startup',
        image: ''
    });


    useEffect(() => {
        (async function getData(id) {
            const serverData = await getBlogData(id)
            setData(prev => ({
                ...prev,
                ...serverData
            }))
        })(id)

    }, [])


    async function updateBlogPost(e, id) {
        e.preventDefault()
        const formData = createFormData(data)

        try {
            const response = await fetch(`/api/posts/${id}`, {
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
    }


    return (
        <BlogFrom formHandler={(e) => updateBlogPost(e, id)} setData={setData} data={data} id={id}/>
    );
}
