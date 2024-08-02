'use client';
import BlogFrom from "@/components/admin-components/BlogFrom";
import {BlogItemType} from "@/types";
import createFormData from "@/utils/createFormData";
import {FormEvent, useCallback, useState} from "react";
import {toast} from "react-toastify";

export default function AddBlogs() {
    const [data, setData] = useState<BlogItemType>({
        title: '',
        description: '',
        author: 'author',
        authorImg: 'authorImg',
        category: 'Startup',
        image: '',
    });


    const onSubmitHandler = useCallback(async (e: FormEvent, data: BlogItemType) => {
        e.preventDefault()
        if (!data.image) {
            toast.warning('please fill the thumbnail input')
        }
        const formData = createFormData(data)
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: formData,
            });

            const serverData = await response.json();

            if (response.status === 200) {
                toast.success(serverData.message);
                setData({
                    title: '',
                    description: '',
                    author: 'author',
                    authorImg: 'authorImg',
                    category: 'Startup',
                    image: '',
                });
                window.location.href = '/admin/blogs-list'
            }

        } catch (error) {
            const err = error as Error;
            toast.error("Failed to update blog: " + err.message);
        }
    }, [])

    return (
        <BlogFrom formHandler={(e) => onSubmitHandler(e, data)} setData={setData} data={data}/>
    );
}
