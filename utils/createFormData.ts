import { BlogItemType } from "@/types";

const createFormData = (data: BlogItemType): FormData => {
    const formData = new FormData();

    formData.append('title', data.title ?? '');
    formData.append('description', data.description ?? '');
    formData.append('category', data.category?.toString() ?? '');
    formData.append('author', data.author ?? '');
    formData.append('authorImg', data.authorImg ?? '');

    if (data.image instanceof Blob) {
        formData.append('image', data.image);
    } else if (typeof data.image === 'string') {
        formData.append('image', data.image);
    }

    return formData;
}

export default createFormData;
