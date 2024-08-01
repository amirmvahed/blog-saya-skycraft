'use client';
import {useEffect, useState} from "react";
import axios from "axios";
import BlogItem from "@/components/BlogItem";
import {BlogItemType, Category} from "@/types";

const categories: Category[] = ["All", "Technology", "Startup", "Lifestyle"];

const BlogList: React.FC = () => {
    const [menu, setMenu] = useState<Category>("All");
    const [blogs, setBlogs] = useState<BlogItemType[]>([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get<BlogItemType[]>('/api/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <>
            <div className="flex justify-center gap-6 my-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setMenu(category)}
                        className={menu === category ? 'bg-black text-white py-1 px-4 rounded-sm transition-colors duration-300' : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {blogs
                    .filter((item) => menu === 'All' || item.category === menu)
                    .map((item) => (
                        <BlogItem
                            key={item._id}
                            id={item._id ?? 0}
                            title={item.title ?? ''}
                            category={item.category ?? ''}
                            description={item.description ?? ''}
                            image={item.image ?? ''}
                        />
                    ))}
            </div>
        </>
    );
};

export default BlogList;
