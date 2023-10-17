import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Button from './components/Button'

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <Header />
                <Hero />
                <Footer />
                <Button text="Click me!" />
            </main>
        </>
    )
}
