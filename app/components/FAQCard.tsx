'use client'
import React, { useState } from 'react'
import { FAQ } from '../constants'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQCard = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="flex flex-wrap justify-center m-auto gap-5 px-20 py-16 max-w-[1264px]">
            {FAQ.map((card, index) => {
                const isCardOpen = openIndex === index

                return (
                    <motion.div
                        key={card.question}
                        className={`bg-lightColor rounded w-[350px] ${
                            isCardOpen ? '' : 'h-[120px]'
                        }`}
                    >
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleAnswer(index)}
                        >
                            <h3 className="p-7 font-bold font-kumbhSans text-xl w-96">
                                Q: {card.question}
                            </h3>
                            <ChevronDown
                                className={`w-8 h-16 mr-7 transform ${
                                    isCardOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </div>
                        <AnimatePresence>
                            {isCardOpen && (
                                <motion.p
                                    key="answer"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={{
                                        open: {
                                            height: 'auto',
                                            opacity: 1,
                                        },
                                        closed: {
                                            height: 0,
                                            opacity: 0,
                                            transition: { duration: 0 },
                                        },
                                    }}
                                    transition={{ duration: 0.1 }}
                                    className="px-7 pb-7 font-kumbhSans leading-8"
                                >
                                    A: {card.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default FAQCard
