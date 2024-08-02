export type BlogItemType = {
    _id?: number,
    title?: string,
    description?: string,
    image?: File | string | null,
    date?: number,
    category?: Category,
    author?: string,
    authorImg?: string
}


export type Category = 'All' | 'Technology' | 'Startup' | 'Lifestyle'
