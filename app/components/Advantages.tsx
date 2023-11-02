import { advantagesText } from '../constants'

const Advantages = () => {
    return (
        <div className="w-full py-6 px-4 max-w-screen-2xl m-auto">
            <h2 className="font-poppins text-center font-bold text-4xl p-6">
                Advantages with Jolint at your workplace
            </h2>
            <div className="flex flex-wrap justify-center w-full mx-auto">
                {advantagesText.map((advantagesText) => {
                    return (
                        <div
                            key={advantagesText.id}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-[30%] h-[261px] bg-darkBlue rounded-lg p-4 m-2 flex flex-col justify-center"
                        >
                            <p className="text-white font-poppins font-normal text-center text-2xl whitespace-pre-line">
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
