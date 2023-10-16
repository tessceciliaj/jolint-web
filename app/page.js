import NavBar from './components/NavBar'
import Button from './components/Button'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <NavBar />
            <h1 className="text-5xl font-poppins">Jolint-web</h1>
            <p className="font-kumbhSans">Brödtext</p>
            <Button text="Click me!" />
        </main>
    )
}
