import React from 'react'
import Image from 'next/image'
import useModelStore from '@/lib/zustand/useModelStore'
import LoadingIcon from './LoadingIcon';
import useNavStore from '@/lib/zustand/useNavStore';

export default function LoadingScreen() {
    const { loading } = useModelStore();
    const {openLoading, setOpenLoading} = useNavStore();

    return (
            <div className={`fixed inset-0 flex flex-col justify-center items-center p-4 md:p-8 transition-all ${openLoading ? 'z-10 opacity-100' : 'opacity-0 invisible'}`}>
                <div className={`z-20 fixed inset-0 bg-slate-900 transition-all ${loading ? 'opacity-100':'opacity-90'}`}/>
                <div className='z-30 w-full md:max-w-xl p-4 flex flex-col justify-center items-center text-white text-center space-y-10'>
                    <p className='font-bold'>
                        Navigate the 3D environment with your finger/cursor.
                        You can click the floating icon to reveal information.
                    </p>
                    <Image className='w-36 h-auto' src='/images/3D-touch-icon.png' alt='3D Touch Icon' width={1000} height={1000} />
                    <div className='h-20 flex justify-center items-center'>
                        {loading ? (
                            <LoadingIcon />
                        ) : (
                            <button onClick={() => setOpenLoading(false)} className='bg-white p-3 rounded text-black font-bold'>Start Exploring</button>
                        )}
                    </div>
                </div>
            </div>
    )
}
