import {BlogItemType} from "@/types";
import {notFound} from "next/navigation";

async function getBlogData(id: number): Promise<BlogItemType> {
    const res = await fetch('http://localhost:3000/api/posts/' + id, {cache: 'no-cache'})
    if (!res.ok) {
        return notFound()
    }

    return await res.json()
}


export default getBlogData
