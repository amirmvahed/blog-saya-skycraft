import {assets} from "@/assets/assets";
import Menu from "@/components/Menu";
import Socials from "@/components/Socials";
import getBlogData from "@/utils/getBlogData";
import Image from "next/image";

interface BlogPropsType {
    params: { id: number }
}

async function Blog({params}: BlogPropsType) {
    const data = await getBlogData(params.id)

    return (data ? <>
                <div className={'bg-gray-200 py-5 px-5 md:px-12 lg:px-28'}>
                    <Menu/>
                    <div className={'text-center my-24'}>
                        <h1 className={'text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'}>{data.title}</h1>
                        <Image className={'mx-auto mt-6 border border-white rounded-full'} src={'/profile_icon.png'}
                               width={60}
                               height={60} alt={data?.author || 'author'}/>
                        <p className={'mt-1 pb-2 text-lg max-w-[740px] mx-auto'}>{data.author}</p>
                    </div>
                </div>
                <div className={'mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'}>
                    <Image className={'border-4 border-white'}
                           src={typeof data?.image !== 'object' ? data.image || assets.blog_pic_1 : assets.blog_pic_1}
                           width={1280} height={720}
                           alt={data.title || 'post image'}/>
                    <div
                        className={'blog-content'}
                        dangerouslySetInnerHTML={{__html: data.description || ''}}
                    />
                    <div className={'my-24'}>
                        <p className={'text-black font font-semibold my-4'}>
                            Share this article on social media
                        </p>
                        <Socials width={50}/>
                    </div>
                </div>
            </>
            : <h1>Error occurred!</h1>
    );
}

export default Blog
