import {BlogTableItems} from "@/components/admin-components/BlogTableItems";
import {BlogItemType} from "@/types";
import {getAllBlogs} from "@/utils/getAllBlogs";

const tableRows: string[] = ['Author name', 'Blog title', 'Blog date', 'Action']


async function BlogList() {
    const data: BlogItemType[] = await getAllBlogs()
    return (
        <div className={'flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'}>
            <h1>All Blogs</h1>
            <div
                className={'relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'}>
                <table className={'w-full text-sm text-gray-500'}>
                    <thead className={'text-sm text-gray-700 text-left uppercase bg-gray-50'}>
                    <tr>
                        {
                            tableRows.map(item => {
                                return (
                                    <th key={item} scope={'col'} className={'px-6 py-3'}>
                                        {item}
                                    </th>
                                )
                            })
                        }
                    </tr>
                    </thead>
                    <BlogTableItems data={data}/>
                </table>
            </div>
        </div>
    );
}

export default BlogList
