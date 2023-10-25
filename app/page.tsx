import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Advantages from './components/Advantages'
import Statistic from './components/Statistic'
import HowItWorks from './components/HowItWorks'

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <Header />
                <Hero />
                <Statistic />
                <Advantages />
                <HowItWorks />
                <Footer />
            </main>
        </>
    )
}
