import React from 'react'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Statistic from './components/Statistic'
import HowItWorks from './components/HowItWorks'

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <Hero />
                <Statistic />
                <Advantages />
                <HowItWorks />
            </main>
        </>
    )
}
