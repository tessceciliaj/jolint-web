import FAQCard from '../components/FAQCard'

const page = () => {
    return (
        <div className="faq-background h-screen">
            <div className="px-4 pt-4 md:px-16 md:pt-16">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl">
                    FAQ
                </h1>
            </div>
            <div>
                <p className="font-kumbhSans p-4 md:px-16">
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
