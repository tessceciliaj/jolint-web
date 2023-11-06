import React from 'react'
import { FAQ } from '../constants'
import { ChevronDown } from 'lucide-react'

const FAQCard = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-5 px-20 py-16">
            {FAQ.map((card) => {
                return (
                    <div
                        key={card.question}
                        className="bg-lightColor rounded w-[350px] min-h-[364px]"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="p-7 font-bold font-kumbhSans text-xl w-96">
                                Q: {card.question}
                            </h3>
                            <ChevronDown className="w-8 h-16 mr-7" />
                        </div>
                        <p className="px-7 pb-7 font-kumbhSans leading-8">
                            A: {card.answer}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default FAQCard
