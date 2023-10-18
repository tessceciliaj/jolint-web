import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Statistic from './components/Statistic'

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <Header />
                <Hero />
                <Statistic />
                <Footer />
            </main>
        </>
    )
}
