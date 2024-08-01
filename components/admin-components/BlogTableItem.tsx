import {assets} from "@/assets/assets";
import Image from 'next/image'
import Link from "next/link";

export default function BlogTableItem({title, author, id, date}) {
    const blogDate = new Date(date)
    return (
        <tr className={'bg-white border-b'}>
            <th scope={'row'}
                className={'items-center content-center gap-3 hidden sm:flex px-6 py-10 font-medium text-gray-900'}>
                <Image width={40} height={40} src={assets.profile_icon}/>
                <p>{author ? author : "no author"}</p>
            </th>
            <td className={'px-6 py-4'}>
                <Link href={'/blogs/' + id}>
                    {title ? title : 'no title'}
                </Link>
            </td>
            <td className={'px-6 py-4'}>
                {blogDate.toDateString()}
            </td>
            <td className={'px-6 py-4'}>
                <button className={'py-2 px-2 border rounded-lg'}>Delete</button>
                <br/>
                <button className={'mt-3 py-2 px-2 rounded-lg border'}>Edit</button>
            </td>
        </tr>

    );
}
