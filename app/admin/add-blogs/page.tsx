'use client';
import {assets} from "@/assets/assets";
import NextImage from 'next/image';
import {useState} from "react";

export default function AddBlogs() {
    const [image, setImage] = useState<File | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

    // Function to get dimensions of an image file
    const getImageDimensions = (file: File, callback: (dimensions: { width: number; height: number }) => void) => {
        const img = new Image();
        img.onload = () => {
            callback({width: img.width, height: img.height});
        };
        img.src = URL.createObjectURL(file);
    };

    return (
        <form className={'pt-5 px-5 sm:pt-12 sm:pl-16'}>
            <p className={'text-xl'}>Upload thumbnail</p>
            <label htmlFor={'image'}>
                {image && imageDimensions ? (
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
                            getImageDimensions(file, (dimensions) => {
                                setImageDimensions(dimensions);
                            });
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
            <input className={'w-full sm:w-[500px] mt-4 px-4 py-3 border'} type="text" placeholder={'Type here'}
                   required/>
            <p className={'text-xl mt-4'}>
                Blog Description
            </p>
            <textarea className={'w-full sm:w-[500px] mt-4 px-4 py-3 border'} placeholder={'Write content here'}
                      rows={6} required/>
            <p className={'text-xl mt-4'}>Blog Category</p>
            <select name="category" className={'w-40 mt-4 px-4 py-3 border text-gray-500'}>
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
