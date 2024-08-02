export const getAllBlogs = async () => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts/', {cache: 'no-cache'})

        if (!response.ok) {
            const errorData = await response.json()
            console.error(errorData.message)
        }

        return response.json()
    } catch (error) {
        console.error("Error fetching blogs:", error)
    }
};
