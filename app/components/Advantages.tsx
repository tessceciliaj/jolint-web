import { advantagesText } from '../constants'

const Advantages = () => {
    return (
        <div className="w-full md:py-20 pb-0 pt-10 xl:px-2 px-4 md:px-6 max-w-screen-2xl m-auto items-center flex flex-col">
            <h3 className="font-poppins text-center font-bold md:text-3xl text-2xl p-8 max-w-sm md:max-w-lg lg:max-w-full">
                Advantages with Jolint at your workplace
            </h3>
            <div className="flex flex-wrap justify-center w-full mx-auto gap-2">
                {advantagesText.map((advantagesText) => {
                    return (
                        <div
                            key={advantagesText.id}
                            className="w-full xs:w-[75%] md:w-1/3 lg:w-[32.5%] md:h-[261px] h-[160px] bg-darkBlue rounded-lg p-4 flex flex-col justify-center"
                        >
                            <p className="text-white font-poppins font-semibold text-center text-xl whitespace-pre-line">
                                {advantagesText.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Advantages
