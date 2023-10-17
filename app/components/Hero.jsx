import React from 'react'
import HeroImage from '../../public/Bg-Startsida.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <Image
                src={HeroImage}
                alt="gradiant image"
                height={455}
                className="w-full"
            />
        </div>
    )
}

export default Hero
