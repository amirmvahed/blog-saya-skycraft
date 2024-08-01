export const getAllBlogs = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/blogs/');
        return response.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
};
