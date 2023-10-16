import Image from 'next/image'

const PartBox = (props) => {

    const { icon, rubrik, description } = props

    return (
        <div className="flex p-4 border-2 border-mediumDarkGray rounded-[10px] h-64 w-64 bg-lightColor">
            <div className='flex justify-between w-full'>
                <Image src={icon} alt="Logo" width={120} height={50} />
                <div className='p-1 border-2 border-mediumDarkGray h-4 w-4 rounded-s'></div>
            </div>
            <h2>{rubrik}</h2>
            <p>{description}</p>
        </div>
    )
}

export default PartBox