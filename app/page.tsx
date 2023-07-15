'use client'

import ModelViewer from '@/components/3DViewers/ModelViewer';
import FeaturedSection from '@/components/sections/FeaturedSection';
import InterestSection from '@/components/sections/InterestSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import ValueSection from '@/components/sections/ValueSection';
import CurrentSection from '@/components/sections/CurrentSection';
import InfoModal from '@/components/modal/InfoModal';

export default function Home() {

  return (
    <main>
      <ModelViewer />
      <IntroductionSection />
      <CurrentSection />
      <FeaturedSection />
      <InterestSection />
      <ValueSection />
      <InfoModal/>
    </main>
  )
}
