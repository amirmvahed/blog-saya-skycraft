import {assets} from '@/assets/assets'
import Image from "next/image";
import Link from "next/link";

interface blogItemView {
    id: number,
    title: string,
    description: string,
    image: string,
    category: string,
}

export default function BlogItem({id, title, description, category, image}: blogItemView) {
    return (
        <Link href={`/blogs/${id}`}>
            <div
                className={'max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000]'}>
                <Image src={image} alt={title} width={400} height={400}
                       className={'border-b border-black'}/>
                <p className={'ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'}>{category}</p>
                <div className={'p-5'}>
                    <h5 className={'mb-2 text-lg font-medium tracking-tight text-gray-900'}>
                        {title}
                    </h5>
                    <p className={'mb-3 text-sm tracking-tight text-gery-700'}>{description}</p>
                    <div className={'inline-flex items-center py-2 font-semibold text-center'}>
                        Read more <Image src={assets.arrow} className={'ml-2'} alt={'Read more'} width={12}/>
                    </div>
                </div>
            </div>
        </Link>
    );
}
