'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { advantagesText } from '../constants';

const Advantages = () => {
  const [showText, setShowText] = useState(Array(advantagesText.length).fill(false));

  const toggleText = (index) => {
    setShowText((prev) => {
      const newShowText = [...prev];
      newShowText[index] = !newShowText[index];
      return newShowText;
    });
  };

  return (
    <div className="w-full md:py-20 pb-0 pt-10 px-4 md:px-6 max-w-screen-2xl m-auto items-center flex flex-col">
      <h3 className="font-poppins text-center font-bold md:text-3xl text-2xl py-8 px-4 sm:max-w-lg lg:max-w-full">
        Advantages with Jolint at your workplace
      </h3>
      <div className="flex mb:flex-row flex-col gap-5 justify-start w-full mx-auto">
        {advantagesText.map((advantage, index) => {
          return (
            <div
              key={advantage.id}
              className={`lg:p-10 p-6 justify-start items-center w-full bg-darkBlue rounded-lg flex flex-col xlplus:min-h-fit lg:h-full lg:min-h-[176px]`}
            >
              <div className='flex flex-col gap-4 text-lg items-center'>
                <h3 className='text-white font-kumbhSans text-center text-xl font-semibold'>{advantage.text}</h3>
                <div className={`text-white ${showText[index] ? 'hidden' : 'block'}`} onClick={() => toggleText(index)}>
                    <ChevronDown size={24} className='cursor-pointer'/>
                </div>
              </div>

              <p className={`text-white font-poppins my-6 text-base ${showText[index] ? 'block' : 'hidden'}`}>
                  {advantage.hovertext}
              </p>
              <div className={`text-white flex w-full justify-center transform rotate-180 ${showText[index] ? 'block' : 'hidden'}`} onClick={() => toggleText(index)}>
                    <ChevronDown size={24} className='cursor-pointer'/>
                </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Advantages;


