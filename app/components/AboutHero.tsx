const AboutHero = () => {
    return (
        <div className="w-full">
            <div
                style={{
                    background:
                        'rgb(238, 243, 248) linear-gradient(183deg, rgba(238, 243, 248, 1) 0%, rgba(255, 255, 255, 1) 35%)',
                }}
                className="flex flex-col items-center bg-cover md:bg-contain bg-no-repeat w-full"
            >
                <section className="max-w-[1200px] flex flex-col items-center w-full md:pt-24 pt-16 md:px-8 px-6">
                    <div className="text-center md:text-left w-full">
                        <h1 className="font-poppins font-bold text-4xl md:text-left mb:text-5xl">
                            About us
                        </h1>
                    </div>
                    <div className="text-center md:text-left w-full">
                        <h2 className="font-bold text-2xl pt-8">
                            Our mission
                        </h2>
                        <p className="font-kumbhSans font-normal md:text-lg text-base text-left pt-2 max-w-[900px]">
                            At Jolint, we are driven by a passion for{' '}
                            <b>improving workplaces</b> and creating a better world
                            for everyone. We make sure to keep ethics and privacy at
                            the forefront{' '}
                            <b>
                                individuals' information is handled with care and
                                respect.
                            </b>{' '}
                            Discover the journey of Jolint, and join us in our quest
                            to make the world a better place, one company at a time.
                            With our innovative approach, cutting-edge technologies,
                            and a team of experts, we are committed to creating a{' '}
                            <b>
                                more inclusive and equitable work culture for all.
                            </b>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutHero
