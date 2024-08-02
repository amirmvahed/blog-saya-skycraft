import {assets} from '@/assets/assets'
import Socials from "@/components/Socials";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={'flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center mt-5'}>
            <Image src={assets.logo_light} alt={'logo'} width={120}/>
            <p className={'text-sm text-white'}>All rights reserved. Copyright @blogger</p>
            <Socials/>
        </footer>
    );
}
