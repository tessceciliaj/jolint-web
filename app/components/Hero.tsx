import React from 'react'
import HeroImage from '../../public/heroImage.png'
import Image from 'next/image'
import { Play } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center md:max-h-[670px] xs:max-h-[550px] max-h-[700px]"
            style={{
                backgroundImage: 'url(/Bg-Startsida.png)',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div className="w-full flex md:justify-center md:items-center overflow-x-hidden">
                <div className="max-w-screen-md xs:p-6 p-4 sm:ml-20 md:ml-6 m-0">
                    <div className="max-w-[500px] md:max-w-full">
                        <h1 className="text-4xl md:text-5xl font-poppins font-bold">
                            Let’s Create an Inclusive <br /> Workspace Together
                        </h1>
                        <p className="py-4 md:text-xl font-kumbhSans font-normal">
                            Gain valuable data insights with our solution that
                            measures inclusion and belonging within your
                            organization, enabling <br />
                            you to take action for a more inclusive and vibrant
                            work culture while maintaining the privacy and
                            integrity of your <br />
                            personal data
                        </p>
                        <div>
                            <div className="mt-4 xs:mb-4 xs:mt-2 flex flex-wrap xs:flex-row flex-col gap-2 xs:justify-start items-center">
                                <Link href='/inclusion' className="lightBtn xs:w-[175px] w-full h-[55px]">
                                    Why inclusion
                                </Link>
                                <div className="blueBtn xs:w-[175px] w-full h-[55px]">
                                    <Play fill="#fff" className="mr-1 ml-2" />
                                    <span className='pr-2.5'>How it works</span>
                                </div>
                            </div>
                            <div className="mt-2 flex xs:justify-start justify-center">
                                <Link href='/form' className="orangeBtn xs:w-[175px] w-full h-[55px]">
                                    Consent form
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex lg:flex lg:relative bg-cover bg-center overflow-hidden">
                    <div className=" lg:max-h-[455.5px] lg:min-h-[455.5px] lg:min-w-[624.78px]">
                        <Image
                            src={HeroImage}
                            alt="hero image"
                            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            width={624.78}
                            height={455.5}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
