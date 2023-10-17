import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Hero />
            <h1 className="text-5xl font-poppins">Jolint-web</h1>
            <p className="font-kumbhSans">Brödtext</p>
        </main>
    )
}
