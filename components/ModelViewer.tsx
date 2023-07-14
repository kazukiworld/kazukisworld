import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import Room from './models/Room';
import ButtonViewer from './ButtonViewer';
import InfoIconViewer from './InfoIconViewer';

export default function ModelViewer() {
    return (
        <div className='fixed inset-0 z-10 w-screen h-screen'>
            <Canvas camera={{ position: [0, 0, -5], fov: 55, zoom: 1.3 }}>
                <Suspense fallback={null}>
                    {/* 3D Room model and functions */}
                    <Room />
                    {/* 3D Button models and functions */}
                    <ButtonViewer />
                    {/* 3D Info Icon models and functions */}
                    <InfoIconViewer />
                    {/* Canvas setting */}
                    <ambientLight intensity={2} />
                    <OrbitControls
                        enableRotate={true}
                        enableZoom={false}
                        maxPolarAngle={1.495}
                        minPolarAngle={1.495}
                        enablePan={false}
                        screenSpacePanning={true}
                        rotateSpeed={-0.6}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}