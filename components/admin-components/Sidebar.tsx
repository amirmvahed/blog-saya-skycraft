import {assets} from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";

const sidebarItems = [
    {
        title: 'Admin page',
        icon: assets.arrow,
        link: '/admin'
    },
    {
        title: 'Add blogs',
        icon: assets.add_icon,
        link: '/admin/add-blogs'
    },
    {
        title: 'Blogs list',
        icon: assets.blog_icon,
        link: '/admin/blogs-list'
    },
]

export default function Sidebar() {
    return (
        <div className={'bg-slate-100 hidden sm:flex sm:flex-col'}>
            <div className={'px-2 sm:pl-14 py-3 border border-black'}>
                <Link href={'/'}>
                    <Image src={assets.logo} width={120} alt={'Blogger Logo'}/>
                </Link>
            </div>
            <div className={'w-28 sm:w-80 h-[100vh] relative py-12 border border-black'}>
                <div className={'w-[50%] sm:w-[80%] absolute right-0 flex flex-col gap-5 pr-4'}>
                    {
                        sidebarItems.map(item => {
                            return (
                                <Link key={item.title} href={item.link}
                                      className={'flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'}>
                                    <Image src={item.icon} alt={item.title} width={28}/><p>{item.title}</p>
                                </Link>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );
}
