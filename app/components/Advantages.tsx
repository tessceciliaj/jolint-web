import React from 'react'
import { advantagesText } from '../constants'

const Advantages = () => {
    return (
        <div className="w-full py-6">
            <h2 className="font-poppins text-center font-bold">
                Advantages with Jolint at your workplace
            </h2>
            <div className="flex flex-wrap justify-center w-full mx-auto">
                {advantagesText.map((advantagesText) => {
                    return (
                        <div
                            key={advantagesText.id}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-52 bg-darkBlue rounded-lg p-4 m-2 flex flex-col justify-center"
                        >
                            <p className="text-white font-poppins font-normal text-center">
                                {advantagesText.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Advantages
