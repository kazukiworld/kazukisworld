import React from 'react'
import IntroductionBtn from '../3DModels/IntroductionBtn';
import CurrentBtn from '../3DModels/CurrentBtn';
import FeaturedBtn from '../3DModels/FeaturedBtn';
import ValueBtn from '../3DModels/ValueBtn';
import InterestBtn from '../3DModels/InterestsBtn';
import useNavStore from '@/lib/zustand/useNavStore';

export default function SectionViewer() {
    const { setCurrentSection } = useNavStore();

    return (
        <group>
            <IntroductionBtn onPointerDown={() => { setCurrentSection("Introduction") }} />
            <CurrentBtn onPointerDown={() => { setCurrentSection("Current Project") }} />
            <ValueBtn onPointerDown={() => { setCurrentSection("Values") }} />
            <InterestBtn onPointerDown={() => { setCurrentSection("Interests") }} />
            <FeaturedBtn onPointerDown={() => { setCurrentSection("Featured Projects") }} />
        </group>
    )
}
