import React from 'react'
import { format } from 'date-fns'
import SignaturePad from 'react-signature-pad-wrapper'

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
                <div className="flex flex-col mt-8">
                    <div>Signature:</div>
                    <div className="border-darkColor border-b border-dashed w-full sm:w-2/3 h-40">
                        <SignaturePad
                            options={{
                                minWidth: 3,
                                maxWidth: 5,
                                penColor: 'rgb(0, 21, 206)',
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ConsentSignature
