import {BlogItemType} from "@/types";

const createFormData = (data: BlogItemType)=> {
    const formData = new FormData();
    formData.append('title', data.title?.toString());
    formData.append('description', data.description?.toString());
    formData.append('category', data.category?.toString());
    formData.append('author', data.author?.toString());
    if (typeof data.image !== 'string' && data.image !== null) {
        formData.append('image', data.image);
    }
    formData.append('authorImg', data.authorImg?.toString());
    return formData
}

export default createFormData
