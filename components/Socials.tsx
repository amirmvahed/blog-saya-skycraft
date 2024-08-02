'use client'

import {assets} from '@/assets/assets'
import Image, {StaticImageData} from "next/image";

const socials: StaticImageData[] = [assets.facebook_icon, assets.twitter_icon, assets.googleplus_icon]

interface SocialsProps {
    width?: number
}

export default function Socials({width = 40}: SocialsProps) {
    return (
        <div className={'flex'}>
            {socials.map((socialLogo: StaticImageData, index) => <Image key={index} width={width} alt={'social logo'}
                                                                        src={socialLogo}/>)}
        </div>
    );
}
