import { BlogItemType } from "@/types"
import { notFound } from "next/navigation"

async function getBlogData(id: number): Promise<BlogItemType | undefined> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, { cache: 'no-cache' })
        if (!res.ok) {
            notFound()
            return undefined
        }
        return await res.json()
    } catch (error) {
        console.error("Error fetching blog data:", error)
        return undefined
    }
}

export default getBlogData
