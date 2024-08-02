import createFormData from '../utils/createFormData'
import { BlogItemType } from "@/types";


// Mock the File constructor in a Node.js environment
(global as any).File = class {
    public parts: any[];
    public name: string;
    public properties: any;

    constructor(parts: any[], name: string, properties: any) {
        this.parts = parts;
        this.name = name;
        this.properties = properties;
    }
};

describe('createFormData', () => {
    it('should create FormData with all fields', () => {
        const data: BlogItemType = {
            _id: 1,
            title: 'Test Title',
            description: 'Test Description',
            image: new File([''], 'test.png', { type: 'image/png' }),
            date: Date.now(),
            category: 'Technology',
            author: 'Test Author',
            authorImg: 'test-author-img-url',
        };

        const formData = createFormData(data);
        expect(formData.get('title')).toBe(data.title);
        expect(formData.get('description')).toBe(data.description);
        expect(formData.get('category')).toBe(data.category);
        expect(formData.get('author')).toBe(data.author);
        expect(formData.get('authorImg')).toBe(data.authorImg);
        expect(typeof formData.get('image')).toBe('object');
    });

    it('should handle missing optional fields', () => {
        const data: BlogItemType = {
            title: 'Test Title',
        };

        const formData = createFormData(data);
        expect(formData.get('title')).toBe(data.title);
        expect(formData.get('description')).toBe('');
        expect(formData.get('category')).toBe('');
        expect(formData.get('author')).toBe('');
        expect(formData.get('authorImg')).toBe('');
        expect(formData.get('image')).toBe(null);
    });

    it('should handle image as a string', () => {
        const data: BlogItemType = {
            title: 'Test Title',
            image: 'test-image-url',
        };

        const formData = createFormData(data);
        expect(formData.get('image')).toBe(data.image);
    });

    it('should handle image as null', () => {
        const data: BlogItemType = {
            title: 'Test Title',
            image: null,
        };

        const formData = createFormData(data);
        expect(formData.get('image')).toBe(null);
    });

    it('should handle missing image', () => {
        const data: BlogItemType = {
            title: 'Test Title',
        };

        const formData = createFormData(data);
        expect(formData.has('image')).toBe(false);
    });
});
