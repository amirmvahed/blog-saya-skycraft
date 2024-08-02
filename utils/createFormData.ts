import {BlogItemType} from "@/types";

const createFormData = (data: BlogItemType, image: File | null | string)=> {
    const formData = new FormData();
    formData.append('title', data.title?.toString());
    formData.append('description', data.description?.toString());
    formData.append('category', data.category?.toString());
    formData.append('author', data.author?.toString());
    if (typeof image !== 'string' && image !== null) {
        formData.append('image', image);
    }
    formData.append('authorImg', data.authorImg?.toString());
    return formData
}

export default createFormData
