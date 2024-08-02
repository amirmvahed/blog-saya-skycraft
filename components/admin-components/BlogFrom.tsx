'use client';
import {assets} from "@/public/assets/assets";
import {BlogItemType} from "@/types";
import NextImage from 'next/image';
import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from "react";

interface BlogFromPropsType {
    formHandler: (e: FormEvent) => Promise<void>
    setData: Dispatch<SetStateAction<BlogItemType>>
    data: BlogItemType
    id?: number
}

export default function BlogFrom({formHandler, setData, data, id}: BlogFromPropsType) {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        setData(prevState => ({...prevState, [name]: value}));
    };


    return (
        <form onSubmit={formHandler} className={'pt-5 px-5 sm:pt-12 sm:pl-16'}>
            <p className={'text-xl'}>Upload thumbnail</p>
            <label htmlFor={'image'}>
                {data.image ? (
                    <NextImage
                        className={"mt-4"}
                        src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)}
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
                            setData(prev => ({
                                ...prev,
                                image: file
                            }));
                        }
                    }}
                    type="file"
                    id={'image'}
                    name={'image'}
                    hidden
                    required={typeof data.image !== 'string'}
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
            <button type={'submit'} className={'mt-8 w-40 h-12 bg-black text-white'}>
                {id ? 'EDIT' : 'ADD'}
            </button>
        </form>
    );
}
