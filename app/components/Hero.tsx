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
                height: '555px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="max-w-screen-2xl flex justify-center items-center">
                <div className="max-w-screen-md p-2 md:p-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-poppins font-semibold">
                            Let’s Create an Inclusive <br /> Workspace Together
                        </h1>
                        <p className="text-sm md:text-xl font-kumbhSans font-normal">
                            Gain valuable data insights with our solution that
                            measures <br />
                            inclusion and belonging within your organization,
                            enabling <br />
                            you to take action for a more inclusive and vibrant
                            work <br />
                            culture while maintaining the privacy and integrity
                            of your <br />
                            personal data
                        </p>
                        <div>
                            <div className="flex flex-wrap gap-2">
                                <button className="lightBtn">
                                    Why inclusion
                                </button>
                                <div className="blueBtn flex items-center">
                                    <Play fill="#fff" className="mr-1 ml-2" />
                                    <span>How it works</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="orangeBtn">
                                    Consent form
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex md:flex-1 md:justify-end">
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={520}
                        height={410}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
