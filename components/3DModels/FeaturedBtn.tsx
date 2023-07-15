/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, RootState } from "@react-three/fiber";

export default function FeaturedBtn(props: any) {
    const { nodes, materials }: any = useGLTF("/models/buttons/featured-button.glb");

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
                    geometry={nodes.btn_Featured_Projects.geometry}
                    material={materials.Lighter}
                    position={[-6.85, 2.576, 1.8]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={0.6}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane026.geometry}
                    material={materials["Hunter Green "]}
                    position={[-7.039, 2.494, 0.898]}
                    rotation={[-0.175, 0, -Math.PI / 2]}
                    scale={[0.6, 1, 1.5]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/models/buttons/featured-button.glb");