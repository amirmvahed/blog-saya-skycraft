export type BlogItemType = {
    id?: number,
    title?: string,
    description?: string,
    image?: string
    date?: number,
    category?: Category,
    author?: string,
    authorImg?: string
}


export type Category = 'All' | 'Technology' | 'Startup' | 'Lifestyle'
