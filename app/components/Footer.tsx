import React from 'react'
import Image from 'next/image'
import Letter_Icon from '../../public/Letter_Icon.svg'
import Linkedin_icon from '../../public/Linkedin_icon-cropped.svg'

const Footer = () => {
    return (
        <>
            <footer className="bg-darkBlue text-lightColor w-full text-lg md:text-xl">
                <div className="w-full flex flex-col sm:flex-row pt-14 pb-2 sm:space-x-[8%] xl:space-x-[16%]">
                    <div className="w-full pl-5 md:pl-[10%]">
                        <p>Jolint Network Analytics AB</p>
                        <p className="mt-4">Org. Nr. 559324-1770</p>
                        <p className="mt-4">Gothenburg, Sweden</p>
                    </div>
                    <div className="w-full pl-5 md:pl-[10%]">
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
                <div className="text-center justify-center flex py-6">
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
