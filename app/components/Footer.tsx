'use client'
import React from 'react'
import Image from 'next/image'
import Letter_Icon from '../../public/Letter_Icon.svg'
import Linkedin_icon from '../../public/Linkedin_icon-cropped.svg'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()
    const isFormPath = pathname === '/form' || pathname === '/form/finish';
  
    const containerClassName = isFormPath
      ? "xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[900px] w-full flex flex-col sm:flex-row pt-16 pb-2 sm:space-x-[8%] xl:space-x-[16%] lg:px-0 md:px-10 px-8"
      : "xl:max-w-[1200px] w-full flex flex-col sm:flex-row pt-16 pb-2 sm:space-x-[8%] xl:space-x-[16%] px-8";

    return (
        <>
            <footer className="bg-darkBlue text-lightColor w-full text-base flex flex-col justify-center items-center">
                <div className={containerClassName}>
                    <div className="w-full">
                        <p>Jolint Network Analytics AB</p>
                        <p className="mt-4">Org. Nr. 559324-1770</p>
                        <p className="mt-4">Gothenburg, Sweden</p>
                    </div>
                    <div className="w-fit min-w-[190px]">
                        <a href="https://www.linkedin.com/company/jolint-network-analytics-ab/">
                            <p className="mt-4 sm:mt-0">
                                <Image
                                    className="inline mr-4"
                                    src={Linkedin_icon}
                                    alt="LinkedIN icon"
                                    width={27}
                                    height={27}
                                />
                                Jolint
                            </p>
                        </a>
                        <a href="mailto:hello@jolint.com">
                            <p className="mt-4">
                                <Image
                                    className="inline mr-4"
                                    src={Letter_Icon}
                                    alt="Envelope icon"
                                    width={26}
                                    height={24}
                                />
                                hello@jolint.com
                            </p>
                        </a>
                    </div>
                </div>
                <div className="text-center justify-center flex py-16">
                    <div className="flex flex-col sm:flex-row">
                        <div>
                            Copyright © 2023 Jolint
                            <span className="invisible sm:visible">
                                &nbsp;|&nbsp;
                            </span>
                        </div>
                        <div>Powered by Jolint</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
