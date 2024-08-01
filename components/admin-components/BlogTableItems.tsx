'use client'
import BlogTableItem from "@/components/admin-components/BlogTableItem";


function BlogTableItems({data}) {
    return (
        <tbody>
        {data.map(({_id, title, author, date}) => <BlogTableItem key={_id} id={_id} title={title} author={author}
                                                                 date={date}/>)}
        </tbody>
    );
}

export default BlogTableItems
