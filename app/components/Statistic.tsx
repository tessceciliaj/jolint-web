import React from 'react'
import { statistics } from '../constants'

const Statistic = () => {
    return (
        <div className="max-w-screen-2xl flex flex-col items-center justify-center w-full text-center md:pt-24 pt-16 pb-4 m-auto px-4 xl:px-2 ">
            <h3 className="font-bold md:text-3xl text-2xl">Inclusion makes a difference</h3>
            <p className="md:text-xl font-kumbhSans md:max-w-full max-w-sm font-normal p-3">
                Organisations with higher inclusion among coworkers have
                according to [source]:{' '}
            </p>
            <div className="sm:grid sm:grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-4 w-full m-auto">
                {statistics.map((statistic) => {
                    return (
                        <div key={statistic.id} className="flex flex-col pt-10">
                            <h4 className="text-4xl text-activeBlue font-semibold">
                                {statistic.percentage}
                            </h4>
                            <p className="pt-6 font-kumbhSans font-semibold">
                                {statistic.advantage}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Statistic
