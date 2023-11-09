import Image from 'next/image'
import Faheem from '../../public/faheemNew.png'
import Klaudia from '../../public/klaudiaNew.png'

const CoFounders = () => {
    return (
        <div className="p-4 md:p-11 max-w-screen-2xl m-auto">
            <h1 className="font-bold text-4xl p-4 md:p-11 text-center md:text-left">
                Co-founders:
            </h1>

            <div className="flex flex-col md:flex-row p-4 md:p-11">
                <Image
                    src={Klaudia}
                    alt="Klaudia profile picture"
                    className="w-48 h-48 md:w-[193px] md:h-[193px] m-auto rounded-full"
                />
                <div className="ml-4 pt-7 md:pt-0 md:ml-6 text-center md:text-left">
                    <h1 className="font-kumbhSans font-semibold text-xl md:text-2xl mb-4">
                        Klaudia Mur
                    </h1>
                    <p className="font-kumbhSans text-base mt-2 max-w-[710px] text-left">
                        I am a data scientist and physicist. My background in
                        Complex Adaptive Systems has fueled my passion for
                        understanding how people interact, communicate, and
                        collaborate in the workplace. My mission is to use
                        data-driven analysis to make the workplace a better
                        place for employees, by understanding the complexities
                        of human interactions and finding ways to improve them.
                        Join me on my journey to enhance workplace culture and
                        improve the work environment. With my expertise in data
                        analysis and understanding of human behavior, I am
                        committed to leading the way towards a more inclusive
                        and equitable work culture for all.
                    </p>
                </div>
            </div>

            <div className="flex p-4 md:p-11 flex-col md:flex-row">
                <Image
                    src={Faheem}
                    alt="Faheem profile picture"
                    className="w-48 h-48 md:w-[193px] md:h-[193px] m-auto rounded-full"
                />
                <div className="ml-4 pt-7 md:pt-0 md:ml-6 text-center md:text-left">
                    <h1 className="font-kumbhSans font-semibold text-xl md:text-2xl mb-4">
                        Faheem Shah
                    </h1>
                    <p className="font-kumbhSans text-base mt-2 max-w-[710px] text-left">
                        As the co-founder of Jolint, I bring a wealth of
                        expertise in organizational communication and
                        collaboration to the table. With a background in
                        international politics, communication studies, and
                        specialized training in these areas, I understand the
                        intricacies and nuances of effective communication
                        within organizations. My passion for this field led me
                        to start Jolint, with the goal of empowering companies
                        to create more inclusive and equitable work cultures.
                        Join me in my journey with Jolint, as we work together
                        to improve communication and collaboration within
                        organizations for a more inclusive work environment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CoFounders
