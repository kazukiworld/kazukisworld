import React, { ReactElement } from 'react';
import ExitIcon from '../icons/ExitIcon';
import useNavStore from '@/lib/zustand/useNavStore';

export default function SectionModal(props: any) {
    const { currentSection, setCurrentSection } = useNavStore();
    const title: string = props.title;

    return (
        <div className={`absolute inset-0 p-4 lg:p-8 bg-slate-900/40 transition-all ${currentSection == title ? 'z-50 opacity-100' : '-z-50 opacity-0'}`}>
            <div className='relative w-full h-full bg-white rounded overflow-hidden'>
                <nav className='z-20 w-full h-16 p-4 bg-rose-600 rounded-t flex justify-between items-center'>
                    <div className='w-8' />
                    <h1 className='text-center text-white font-bold lg:text-lg rounded-t'>{title}</h1>
                    <ExitIcon className="w-8 h-8 fill-white" onClick={() => setCurrentSection(null)} />
                </nav>
                <div className='overflow-auto h-full p-4 lg:p-8'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
