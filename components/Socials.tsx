'use client'

import Image from "next/image";
import {assets} from '@/assets/assets'

const socials: string[] = [assets.facebook_icon, assets.twitter_icon, assets.googleplus_icon]

interface SocialsProps {
    width?: number
}

export default function Socials({width = 40}: SocialsProps) {
    return (
        <div className={'flex'}>
            {socials.map((socialLogo: string, index) => <Image key={index} width={width} alt={'social logo'} src={socialLogo}/>)}
        </div>
    );
}
