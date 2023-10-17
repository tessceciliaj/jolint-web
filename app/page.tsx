import Button from './components/Button'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <Header />
                <h1 className="text-5xl font-poppins">Jolint-web</h1>
                <p className="font-kumbhSans">Brödtext</p>
                <Footer />
                <Button text="Click me!" />
            </main>
        </>
    )
}
