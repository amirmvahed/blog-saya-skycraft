import Image from "next/image";
import {assets} from '@/public/assets/assets'
import Link from "next/link";
import React from "react";

export default function Menu() {
    return (
        <div className={'flex justify-between items-center'}>
            <Link href={'/'}>
                <Image src={assets.logo} width={180} alt={'logo'} className={'w-[130px] sm:w-auto'}/>
            </Link>
            <Link
                href={'/admin'}
                className={'flex items-center gap-2 font-medium text-xs py-1 px-1 sm:text-sm sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000]'}>
                Dashboard <Image src={assets.arrow} alt={'Dashboard'}/>
            </Link>
        </div>
    );
}
