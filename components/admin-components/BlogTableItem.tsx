import {assets} from "@/assets/assets";
import Image from 'next/image'
import Link from "next/link";
import {toast} from "react-toastify";
import { useRouter } from 'next/navigation';

type BlogTableItemsProps = {
    title: string,
    author: string,
    id: number,
    date: string
};

export default function BlogTableItem({title, author, id, date}: BlogTableItemsProps) {
    const blogDate = new Date(date)
    const router = useRouter();

    async function deleteBlog(id: number) {
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            toast.success('Blog successfully deleted')
            router.refresh();
        }

        if (!response.ok) {
            toast.error('An Error occurred in DELETE blogs!')
            router.refresh();
        }

    }
    return (
        <tr className={'bg-white border-b'}>
            <th scope={'row'}
                className={'items-center content-center gap-3 hidden sm:flex px-6 py-10 font-medium text-gray-900'}>
                <Image alt="Author image" width={40} height={40} src={assets.profile_icon}/>
                <p>{author}</p>
            </th>
            <td className={'px-6 py-4'}>
                <Link href={'/blogs/' + id}>
                    {title}
                </Link>
            </td>
            <td className={'px-6 py-4'}>
                {blogDate.toDateString()}
            </td>
            <td className={'px-6 py-4'}>
                <button onClick={() => deleteBlog(id)} className={'py-2 px-2 border rounded-lg'}>Delete</button>
                <br/>
                <button className={'mt-3 py-2 px-2 rounded-lg border'}>Edit</button>
            </td>
        </tr>

    );
}
