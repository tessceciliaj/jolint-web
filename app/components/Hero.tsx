import React from 'react'

const Hero = () => {
    return (
        <div
            className="bg-cover"
            style={{
                backgroundImage: 'url(/Bg-Startsida.png)',
                width: '100%',
                height: '455px',
            }}
        >
            <h1 className="text-5xl font-poppins">Jolint-web</h1>
            <p className="font-kumbhSans">Brödtext</p>
        </div>
    )
}

export default Hero
