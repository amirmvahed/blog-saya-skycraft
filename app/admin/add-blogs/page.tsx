'use client';
import {assets} from "@/assets/assets";
import {BlogItemType} from "@/types";
import createFormData from "@/utils/createFormData";
import NextImage from 'next/image';
import {useState} from "react";
import {toast} from "react-toastify";

export default function AddBlogs() {
    const [image, setImage] = useState<File | null | string>(null);
    const [data, setData] = useState<BlogItemType>({
        title: '',
        description: '',
        author: 'author',
        authorImg: 'authorImg',
        category: 'Startup',
        image: '',
    });


    const onChangeHandler = (event) => {
        const {name, value} = event.target
        setData(prevState => ({...prevState, [name]: value}))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const formData = createFormData(data, image)
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
                setImage(null)
                window.location.href = '/admin/blogs-list'
            } else {
                toast.error("ERROR: " + data.message)
            }
        } catch (e) {
            toast.error("ERROR: " + e.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className={'pt-5 px-5 sm:pt-12 sm:pl-16'}>
            <p className={'text-xl'}>Upload thumbnail</p>
            <label htmlFor={'image'}>
                {image ? (
                    <NextImage
                        className={"mt-4"}
                        src={URL.createObjectURL(image)}
                        width={140}
                        height={70}
                        alt={'Upload Area'}
                    />
                ) : (
                    <NextImage
                        className={"mt-4"}
                        src={assets.upload_area}
                        width={140}
                        height={70}
                        alt={'Upload Area'}
                    />
                )}
                <input
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setImage(file);
                        }
                    }}
                    type="file"
                    id={'image'}
                    hidden
                    required
                />
            </label>
            <p className={'text-xl mt-4'}>
                Blog title
            </p>
            <input name={'title'} onChange={onChangeHandler} value={data?.title}
                   className={'w-full sm:w-[500px] mt-4 px-4 py-3 border'} type="text" placeholder={'Type here'}
                   required/>
            <p className={'text-xl mt-4'}>
                Blog Description
            </p>
            <textarea name={'description'} onChange={onChangeHandler} value={data?.description}
                      className={'w-full sm:w-[500px] mt-4 px-4 py-3 border'} placeholder={'Write content here'}
                      rows={6} required/>
            <p className={'text-xl mt-4'}>Blog Category</p>
            <select name="category" onChange={onChangeHandler} value={data?.category}
                    className={'w-40 mt-4 px-4 py-3 border text-gray-500'}>
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <br/>
            <button type={'submit'} className={'mt-8 w-40 h-12 bg-black text-white '}>
                ADD
            </button>
        </form>
    );
}
