import React from 'react'
import ExitIcon from '../icons/ExitIcon'
import useNavStore from '@/lib/zustand/useNavStore'

export default function InfoModal(props: any) {
    const {currentInfo, setCurrentInfo} = useNavStore(); 

    return (
        <div className={`fixed top-0 w-full md:p-4 h-1/2 transition-all duration-300 ease-in-out ${currentInfo ? "translate-y-0":"-translate-y-full"}`}>
            <div className='relative w-full h-full rounded-lg bg-white'>
                <div className='absolute top-0 w-full bg-emerald-600 md:rounded-t-lg flex justify-between items-center p-4'>
                    <div className='w-8' />
                    <h1 className='text-center text-white font-bold lg:text-lg'>Information</h1>
                    <ExitIcon className="w-8 h-8 fill-white" onClick={() => setCurrentInfo(null)} />
                </div>
                <div className='w-full h-full flex justify-center items-center p-4'>
                    <p className='text-center md:max-w-2xl'>{currentInfo}</p>
                </div>
            </div>
        </div>
    )
}
