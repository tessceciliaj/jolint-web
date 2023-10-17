import React from 'react'
import Image from 'next/image'
import speaker from '../../public/volume-2.svg'

const FormHeaderComponent = ({ title, subtitle }) => {
    return (
        <>
            <div className="flex flex-row">
                <h1 className="font-bold text-4xl">{title}</h1>
                <div className="ml-8">
                    <Image src={speaker} alt="Speaker Icon" />
                </div>
            </div>
            {subtitle && (
                <h2 className=" font-semibold font-kumbhSans text-2xl">
                    {subtitle}
                </h2>
            )}
        </>
    )
}

export default FormHeaderComponent
