import {assets} from "@/assets/assets";
import Sidebar from "@/components/admin-components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const links: { link: string, title: string }[] = [
    {
        link: '/admin/add-blogs',
        title: 'Add Blog'
    },
    {
        link: '/admin/blogs-list',
        title: 'Blogs list'
    }
]

export default function Layout({children}) {
    return (
        <div className={'flex'}>
            <ToastContainer theme={'dark'}/>
            <Sidebar/>
            <div className={'flex flex-col w-full'}>
                <div
                    className={'flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'}>
                    <h3 className={'text-lg'}>
                        Admin Panel
                    </h3>
                    <div className={'flex justify-end sm:hidden'}>
                        {
                            links.map(i => <Link className={'p-2 m-1 border rounded-lg'} href={i.link}>{i.title}</Link>)
                        }
                    </div>
                    <Image src={assets.profile_icon} width={40} alt={'Profile picture'}/>
                </div>
                {children}
            </div>
        </div>
    );
}
