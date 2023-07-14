/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, RootState } from "@react-three/fiber";

export default function InterestBtn(props: any) {
    const { nodes, materials }: any = useGLTF("/models/buttons/interests-button.glb");

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state: RootState) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.position.y = Math.sin(time * 2) * 0.05;
        }
    });

    return (
        <group {...props} position={[0, -3.8, 0]} dispose={null}>
            <group ref={groupRef}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.btn_Personal_Interest.geometry}
                    material={materials.Lighter}
                    position={[2.366, 2.663, -6.914]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.6}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane027.geometry}
                    material={materials["Magenta 2"]}
                    position={[3.375, 2.757, -7.085]}
                    rotation={[Math.PI / 2, -0.08, 0]}
                    scale={[1.3, 1, 0.35]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/models/buttons/interests-button.glb");
