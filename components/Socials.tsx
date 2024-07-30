'use client'

import Image from "next/image";
import {assets} from '@/assets/assets'

const socials: string[] = [assets.facebook_icon, assets.twitter_icon, assets.googleplus_icon]

export default function Socials() {
    return (
        <div className={'flex'}>
            {socials.map((socialLogo:string) => <Image width={40} src={socialLogo}/>)}
        </div>
    );
}
