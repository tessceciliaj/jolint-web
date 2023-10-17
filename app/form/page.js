import PartBox from '../components/FormPartBox';
import { partBoxInfo } from '../constants';  

const Page = () => {
    return (
        <>
            <div className="flex items-center justify-center my-20">
                <section className="gap-[19px] w-full flex flex-col p-4 lg:grid-cols-4 max-w-fit md:grid md:grid-cols-2">
                    {partBoxInfo.map((boxInfo) => (
                        <PartBox
                            key={boxInfo.id}
                            title={boxInfo.title}
                            subTitle={boxInfo.subTitle}
                            icon={boxInfo.icon}
                        />
                    ))}
                </section>
            </div>
        </>
    );
}

export default Page;


