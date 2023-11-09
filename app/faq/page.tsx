import FAQCard from '../components/FAQCard'

const page = () => {
    return (
        <div className="faq-background min-h-screen flex flex-col items-center md:pt-24 pt-16 pb-48">
            <div className='max-w-[1200px] flex flex-col items-center w-full lg:px-8 md:px-6 px-4'>
                <div className='w-full flex flex-col items-center md:items-start'>
                    <h1 className="font-poppins font-bold text-4xl mb:text-5xl">
                        FAQ
                    </h1>
                    <p className="font-kumbhSans text-xl md:pt-8 pt-4 font-bold md:font-medium md:text-start text-center">
                        Learn more about Jolint and our work method
                    </p>
                </div>
                <div>
                    <FAQCard />
                </div>
            </div>
        </div>
    )
}

export default page
