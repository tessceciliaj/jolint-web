import React from 'react'
import { statistics } from '../constants'

const Statistic = () => {
    return (
        <div className=" flex flex-col items-center justify-center w-full text-center pt-16">
            <h3 className="font-bold text-3xl">Inclusion makes a difference</h3>
            <p className="text-xl font-kumbhSans p-3">
                Organisations with higher inclusion among coworkers have
                according to [source]:{' '}
            </p>
            <div className="grid grid-rows-2 grid-cols-2 md:grid-row-1 md:grid-cols-4 gap-4 w-full m-auto">
                {statistics.map((statistic) => {
                    return (
                        <div key={statistic.id} className="flex flex-col pt-10">
                            <h4 className="text-4xl text-activeBlue font-semibold">
                                {statistic.percentage}
                            </h4>
                            <p className="pt-6 font-kumbhSans">
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
