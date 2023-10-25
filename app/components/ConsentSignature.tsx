import React, { useRef, useState } from 'react'
import { format } from 'date-fns'
import SignaturePad from 'react-signature-pad-wrapper'

const ConsentSignature: React.FC = () => {
    const today = new Date()
    const formattedDate = format(today, 'dd MMMM yyyy')
    const signaturePadRef = useRef<SignaturePad | null>(null)
    const nameInputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState<string | undefined>('')

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
                <div className="flex flex-row my-8">
                    <div>
                        Name:<span className="text-accentColor ml-1">*</span>
                    </div>
                    <input
                        className="ml-2 border-darkColor border-b border-dashed w-full sm:w-1/2 font-bold"
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
                    <div className="border-darkColor border-b border-dashed w-full sm:w-2/3 h-40">
                        <SignaturePad
                            options={{
                                penColor: 'rgb(0, 21, 206)',
                            }}
                            ref={signaturePadRef}
                        />
                    </div>
                    <div>
                        <button className="mt-2" onClick={clearSignature}>
                            Clear
                        </button>
                    </div>
                </div>
                <div></div>
                <div className="flex sm:gap-[40px] gap-4 mt-[30px] w-full">
                    <button className="lightBtn">Back</button>
                    <button
                        className="blueBtn"
                        onClick={() => {
                            if (signaturePadRef.current) {
                                const isEmpty =
                                    signaturePadRef.current.isEmpty()
                                console.log('name: ', name)
                                console.log('sign: ', isEmpty)

                                if (!isEmpty && name !== '') {
                                    console.log('completed')
                                    console.log('NEXT PAGE YEAH')
                                } else {
                                    console.log(
                                        'Please fill in all required fields.'
                                    )
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
