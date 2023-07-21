'use client'

import ModelViewer from '@/components/3DViewers/ModelViewer';
import InfoModal from '@/components/modal/InfoModal';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {

  return (
    <main>
      <ModelViewer />
      <InfoModal />
      <LoadingScreen />
    </main>
  )
}
