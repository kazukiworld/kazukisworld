import React from 'react'
import IntroductionBtn from './models/IntroductionBtn';
import CurrentBtn from './models/CurrentBtn';
import FeaturedBtn from './models/FeaturedBtn';
import ValueBtn from './models/ValueBtn';
import InterestBtn from './models/InterestsBtn';

export default function ButtonViewer() {
    return (
        <group>
            <IntroductionBtn />
            <CurrentBtn />
            <ValueBtn />
            <InterestBtn />
            <FeaturedBtn />
        </group>
    )
}
