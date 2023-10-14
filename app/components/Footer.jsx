const Footer = () => {
    return (
        <>
            <footer className="bg-darkBlue text-lightColor w-full text-lg md:text-xl">
                <div className="w-full flex flex-col sm:flex-row pt-14 pb-2 lg:space-x-64 xl:space-x-96">
                    <div className="w-full pl-5 md:pl-24">
                        {/* <div className="w-full pl-24"> */}
                        <p>Jolint Network Analytics AB</p>
                        <p className="mt-4">Org. Nr. 559324-1770</p>
                        <p className="mt-4">Gothenburg, Sweden</p>
                    </div>
                    {/* <div className="w-full"></div> */}
                    <div className="w-full px-5 md:px-24">
                        {/* <div className="w-full pr-24"> */}
                        <p className="mt-4 sm:mt-0">Jolint</p>
                        <p className="mt-4">hello@jolint.com</p>
                    </div>
                </div>
                <div className="text-center justify-center flex py-6">
                    <div className="flex flex-col sm:flex-row">
                        <div>
                            Copyright © 2023 Jolint
                            <span className="invisible sm:visible">
                                &nbsp;|&nbsp;
                            </span>
                        </div>
                        <div>Powered by Jolint</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
