import Image from 'next/image'
import Faheem from '../../public/faheemNew.png'
import Klaudia from '../../public/klaudiaNew.png'

const CoFounders = () => {
    return (
        <div className="md:px-8 px-6 pb-16 md:pb-52 pt-20 max-w-[1200px]">
            <h1 className="font-bold text-2xl text-center md:text-left">
                Co-founders
            </h1>

            <div className="flex flex-col md:flex-row md:gap-10 md:mb-20 my-12">
                <Image
                    src={Klaudia}
                    alt="Klaudia profile picture"
                    className="w-48 h-48 md:w-[193px] md:h-[193px] m-auto rounded-full"
                />
                <div className="text-center md:text-left">
                    <h1 className="mt-4 mb-2 font-kumbhSans font-semibold text-xl md:text-2xl">
                        Klaudia Mur
                    </h1>
                    <p className="font-kumbhSans text-base text-left">
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

            <div className="flex flex-col md:flex-row my-12 md:gap-10">
                <Image
                    src={Faheem}
                    alt="Faheem profile picture"
                    className="w-48 h-48 md:w-[193px] md:h-[193px] m-auto rounded-full"
                />
                <div className="text-center md:text-left">
                    <h1 className="mt-4 mb-2 font-kumbhSans font-semibold text-xl md:text-2xl">
                        Faheem Shah
                    </h1>
                    <p className="font-kumbhSans text-base text-left">
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
