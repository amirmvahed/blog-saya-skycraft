'use client'
import BlogTableItem from "@/components/admin-components/BlogTableItem";
import {BlogItemType} from "@/types";
import React from "react";

type BlogTableItemsProps = {
    data: BlogItemType[];
};

export const BlogTableItems: React.FC<BlogTableItemsProps> = ({data}) => {
    return (
        <tbody>
        {data.map(({_id, title, author, date}) => <BlogTableItem key={_id} id={_id} title={title} author={author}
                                                                 date={date}/>)}
        </tbody>
    );
};
