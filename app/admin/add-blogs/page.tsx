'use client';
import BlogFrom from "@/components/admin-components/BlogFrom";
import {BlogItemType} from "@/types";
import createFormData from "@/utils/createFormData";
import {useState} from "react";
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


    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const formData = createFormData(data)
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.status === 200) {
                toast.success(data.message);
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

        } catch (e) {
            toast.error("ERROR: " + e.message)
        }
    }

    return (
        <BlogFrom formHandler={onSubmitHandler} setData={setData} data={data}/>
    );
}
