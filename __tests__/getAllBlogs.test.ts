import { getAllBlogs } from '../utils/getAllBlogs'

// Mocking fetch globally
global.fetch = jest.fn();

// Mocking console.error
global.console.error = jest.fn();

describe('getAllBlogs', () => {
    const mockApiUrl = 'https://mockapi.com';

    beforeAll(() => {
        process.env.NEXT_PUBLIC_API_URL = mockApiUrl;
    });

    afterEach(() => {
        (fetch as jest.Mock).mockClear();
        (console.error as jest.Mock).mockClear();
    });

    it('should fetch blogs successfully', async () => {
        const mockBlogs = [{ id: 1, title: 'Test Blog' }];
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockBlogs),
        });

        const result = await getAllBlogs();
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/api/posts/`, { cache: 'no-cache' });
        expect(result).toEqual(mockBlogs);
        expect(console.error).not.toHaveBeenCalled();
    });

    it('should handle non-ok response', async () => {
        const mockError = { message: 'Not Found' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            json: jest.fn().mockResolvedValueOnce(mockError),
        });

        const result = await getAllBlogs();
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/api/posts/`, { cache: 'no-cache' });
        expect(result).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith(mockError.message);
    });

    it('should handle fetch error', async () => {
        const mockError = new Error('Network error');
        (fetch as jest.Mock).mockRejectedValueOnce(mockError);

        const result = await getAllBlogs();
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/api/posts/`, { cache: 'no-cache' });
        expect(result).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith('Error fetching blogs:', mockError);
    });
});
