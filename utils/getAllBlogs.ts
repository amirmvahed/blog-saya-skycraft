export const getAllBlogs = async (options = undefined) => {
    try {
        const response = await fetch('http://localhost:3000/api/posts/', options);
        return response.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
};
