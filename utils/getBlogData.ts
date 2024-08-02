import {BlogItemType} from "@/types";
import {notFound} from "next/navigation";

async function getBlogData(id: number): Promise<BlogItemType> {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts/' + id, {cache: 'no-cache'})
    if (!res.ok) {
        return notFound()
    }

    return await res.json()
}


export default getBlogData
