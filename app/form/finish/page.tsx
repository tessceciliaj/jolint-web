'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import checkbox from '../../../public/Finish_checkbox.svg'
import confetti from 'canvas-confetti'
import Link from 'next/link'

export default function Close() {
    useEffect(() => {
        const options = {
            particleCount: 200,
            spread: 100,
            origin: { y: 0.5 },
            startVelocity: 30,
            decay: 0.95,
        }

        const launchConfetti = () => {
            confetti(options)
        }

        launchConfetti()
    }, [])

    return (
        <div className="flex justify-center items-center flex-col w-full flex-grow gap-10 my-10">
            <div className="text-center flex md:flex-row flex-col items-center md:gap-11 gap-2">
                <Image
                    src={checkbox}
                    alt="checkbox Icon"
                    className="md:w-[97px] w-[56px]"
                />
                <h1 className="font-poppins text-[48px] font-bold">
                    Thank you!
                </h1>
            </div>
            <p className="font-kumbhSans text-center">
                Your consent form was successfully submitted. We appreciate your
                collaboration. Thank you!
            </p>
            <Link href="/">
                <button className="blueBtn w-[175px] h-[55px]">Close</button>
            </Link>
        </div>
    )
}
