import React from 'react'

const FormText = ({ title, text1, text2 }) => {
    return (
        <>
            <section className="mt-8 font-kumbhSans">
                {title && <h2 className="font-semibold text-2xl">{title}</h2>}
                {text1 && <p className="mt-4 text-base leading-8">{text1}</p>}
                {text2 && <p className="mt-4 text-base leading-8">{text2}</p>}
            </section>
        </>
    )
}

export default FormText
