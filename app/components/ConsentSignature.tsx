import React from 'react'
import { format, isToday } from 'date-fns'

const ConsentSignature = () => {
    const today = new Date()
    const formattedDate = format(today, 'dd MMMM yyyy')

    return (
        <div>
            <section>
                <div className="flex flex-row my-8">
                    <div>Name:</div>
                    <input
                        className="ml-2 border-darkColor border-b border-dashed w-full sm:w-1/2 font-bold"
                        type="text"
                        id="name"
                    ></input>
                </div>
                <div className="flex flex-row my-8">
                    <div>
                        Today's Date:
                        <span className=" ml-2 font-bold">{formattedDate}</span>
                    </div>
                </div>
                <div className="flex flex-row mt-8">
                    <div>Signature: </div>
                </div>
            </section>
        </div>
    )
}

export default ConsentSignature
