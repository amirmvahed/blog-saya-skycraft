import getBlogData from '../utils/getBlogData'
import { BlogItemType } from '@/types'
import { notFound } from 'next/navigation'

// Mocking fetch globally
global.fetch = jest.fn()

// Spy on notFound from 'next/navigation'
jest.mock('next/navigation', () => ({
    notFound: jest.fn(),
}));

describe('getBlogData', () => {
    const mockApiUrl = 'https://mockapi.com'
    const testId = 1

    beforeAll(() => {
        process.env.NEXT_PUBLIC_API_URL = mockApiUrl
    });

    afterEach(() => {
        (fetch as jest.Mock).mockClear()
        jest.clearAllMocks()
    });

    it('should fetch blog data successfully', async () => {
        const mockBlog: BlogItemType = {
            title: 'Test Blog',
            description: 'This is a test blog.',
        };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockBlog),
        });

        const result = await getBlogData(testId)
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/api/posts/${testId}`, { cache: 'no-cache' })
        expect(result).toEqual(mockBlog)
        expect(notFound).not.toHaveBeenCalled()
    });

    it('should call notFound if response is not ok', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            json: jest.fn(),
        })

        const result = await getBlogData(testId)
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/api/posts/${testId}`, { cache: 'no-cache' })
        expect(result).toBeUndefined()
        expect(notFound).toHaveBeenCalled()
    })

    it('should handle fetch error', async () => {
        const mockError = new Error('Network error');
        (fetch as jest.Mock).mockRejectedValueOnce(mockError)

        const result = await getBlogData(testId)
        expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/api/posts/${testId}`, { cache: 'no-cache' })
        expect(result).toBeUndefined()
        expect(notFound).not.toHaveBeenCalled()
    })
});
