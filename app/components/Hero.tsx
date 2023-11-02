import React from 'react'
import HeroImage from '../../public/heroImage.png'
import Image from 'next/image'
import { Play } from 'lucide-react'

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center"
            style={{
                backgroundImage: 'url(/Bg-Startsida.png)',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="max-w-screen-2xl flex justify-center items-center overflow-x-hidden px-4">
                <div className="max-w-screen-md p-4 md:p-8">
                    <div className="md:pl-24 ">
                        <h1 className="text-4xl md:text-5xl font-poppins font-bold">
                            Let’s Create an Inclusive <br /> Workspace Together
                        </h1>
                        <p className=" py-4 md:text-xl font-kumbhSans font-normal">
                            Gain valuable data insights with our solution that
                            measures inclusion and belonging within your
                            organization, enabling <br />
                            you to take action for a more inclusive and vibrant
                            work culture while maintaining the privacy and
                            integrity of your <br />
                            personal data
                        </p>
                        <div>
                            <div className="flex flex-wrap gap-2 ">
                                <button className="lightBtn md:w-[175px] w-full h-[55px]">
                                    Why inclusion
                                </button>
                                <div className="blueBtn my-2 flex items-center md:w-[175px] w-full h-[55px] justify-center">
                                    <Play fill="#fff" className="mr-1 ml-2" />
                                    <span>How it works</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="orangeBtn md:w-[175px] w-full h-[55px]">
                                    Consent form
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex md:flex-1 md:justify-end relative left-12">
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={620}
                        height={550}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
