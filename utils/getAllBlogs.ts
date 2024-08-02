export const getAllBlogs = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/posts/',{cache: 'no-cache'})

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message)
        }

        return response.json()
    } catch (error) {
        console.error("Error fetching blogs:", error)
        throw error
    }
};
