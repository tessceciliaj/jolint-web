const AboutHero = () => {
    return (
        <div>
            <div
                style={{
                    background:
                        'rgb(238, 243, 248) linear-gradient(183deg, rgba(238, 243, 248, 1) 0%, rgba(255, 255, 255, 1) 35%)',
                }}
                className="flex flex-col bg-cover md:bg-contain bg-no-repeat"
            >
                <div className="px-4 pt-8 md:p-16 text-center md:text-left">
                    <h1 className="font-poppins font-bold text-4xl md:text-left md:text-5xl">
                        About us
                    </h1>
                    <p className="font-bold md:text-2xl pb-4 md:pb-7 md:hidden">
                        Learn more about Jolint and our{'\u00A0'}work{'\u00A0'}
                        method
                    </p>
                </div>
                <div className="text-center md:text-left md:pl-16">
                    <h2 className="font-bold text-2xl md:text-4xl md:p-0 p-4">
                        Our mission
                    </h2>
                    <p className="font-kumbhSans font-normal text-base text-left md:px-0 p-4 max-w-3xl">
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
            </div>
        </div>
    )
}

export default AboutHero
