import FAQCard from '../components/FAQCard'

const page = () => {
    return (
        <div className="faq-background min-h-screen">
            <div className="px-4 pt-8 md:px-20 md:pt-16">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center md:text-left">
                    FAQ
                </h1>
            </div>
            <div>
                <p className="font-kumbhSans text-xl px-4 pt-2 md:px-20 font-bold md:font-medium text-center md:text-left">
                    Learn more about Jolint and our work method
                </p>
            </div>
            <div>
                <FAQCard />
            </div>
        </div>
    )
}

export default page
