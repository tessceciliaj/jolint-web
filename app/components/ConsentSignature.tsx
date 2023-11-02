import React, { useRef, useState } from 'react'
import { format } from 'date-fns'
import SignaturePad from 'react-signature-pad-wrapper'

type ConsentSignatureProps = {
    nextPage: () => void
    previousPage: () => void
}

const ConsentSignature: React.FC<ConsentSignatureProps> = ({
    nextPage,
    previousPage,
}) => {
    const today = new Date()
    const formattedDate = format(today, 'dd MMMM yyyy')
    const signaturePadRef = useRef<SignaturePad | null>(null)
    const nameInputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState<string | undefined>('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const clearSignature = (): void => {
        if (signaturePadRef.current) {
            signaturePadRef.current.clear()
        }
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedName = e.target.value
        setName(updatedName)
    }

    return (
        <div>
            <section>
                <div className="flex flex-row mt-4">
                    <span className="text-accentColor mb-2 mr-2">*</span>
                    Required
                </div>
                <div className="flex flex-row my-8 md:w-[calc(100%-200px)]">
                    <div>
                        Name:<span className="text-accentColor ml-1">*</span>
                    </div>
                    <input
                        className="ml-2 border-darkColor border-b border-dashed w-full font-bold"
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        ref={nameInputRef}
                    ></input>
                </div>
                <div className="flex flex-row my-8">
                    <div>
                        Today's Date:
                        <span className="ml-2 font-bold">{formattedDate}</span>
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    <div>
                        Signature:
                        <span className="text-accentColor ml-1">*</span>
                    </div>
                    <div className="border-darkColor border-b border-dashed w-full md:w-[calc(100%-200px)] h-40">
                        <SignaturePad
                            options={{
                                penColor: 'rgb(0, 21, 206)',
                            }}
                            ref={signaturePadRef}
                        />
                    </div>
                    <div>
                        <button
                            className="mt-2 text-darkGray italic text-sm"
                            onClick={clearSignature}
                        >
                            Redo signature
                        </button>
                    </div>
                </div>
                <div
                    className={`flex mt-4 text-accentColor ${
                        showErrorMessage ? 'visible' : 'invisible'
                    }`}
                >
                    Please fill in all required fields
                </div>
                <div className="flex sm:gap-[40px] gap-4 mt-[30px] w-full">
                    <button
                        className="lightBtn w-[175px] h-[55px]"
                        onClick={previousPage}
                    >
                        Back
                    </button>
                    <button
                        className="blueBtn w-[175px] h-[55px]"
                        onClick={() => {
                            if (signaturePadRef.current) {
                                const isEmpty =
                                    signaturePadRef.current.isEmpty()
                                if (!isEmpty && name !== '') {
                                    nextPage()
                                } else {
                                    setShowErrorMessage(true)
                                }
                            }
                        }}
                    >
                        Done
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ConsentSignature
