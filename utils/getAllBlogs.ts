import {Category} from "@/types";

export const getAllBlogs = async () => {
    try {
        // const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts/', {cache: 'no-cache'})
        //
        // if (!response.ok) {
        //     const errorData = await response.json()
        //     console.error(errorData.message)
        // }
        //
        return [{
            _id: 12,
            title: 'string',
            description: 'string',
            image: 'string',
            date: 'number',
            category: 'All',
            author: 'asd',
            authorImg: 'string'
        }]
    } catch (error) {
        console.error("Error fetching blogs:", error)
    }
};
