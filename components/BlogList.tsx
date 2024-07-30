'use client';
import {blog_data} from "@/assets/assets";
import BlogItem from "@/components/BlogItem";
import {BlogItemType, Category} from "@/types";
import {useState} from "react";


const categories: Category[] = ["All", "Technology", "Startup", "Lifestyle"];

export default function BlogList() {
    const [menu, setMenu] = useState<Category>("All");

    return (
        <>
            <div className='flex justify-center gap-6 my-10'>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setMenu(category)}
                        className={menu === category ? 'bg-black text-white py-1 px-4 rounded-sm transition-colors duration-300' : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog_data.filter(item => menu === 'All' || item.category === menu).map((item: BlogItemType) => (
                    <BlogItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </>
    );
}
