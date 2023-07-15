/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, RootState, Vector3, Euler } from "@react-three/fiber";

export default function InfoIconBtn(props: any) {
    const { nodes, materials }: any = useGLTF("/models/buttons/icon-button.glb");

    const position: Vector3 = props.position || null;
    const rotation: Euler = props.rotation || null;
    const scale: Vector3 = props.scale || null;
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state: RootState) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.position.y = Math.sin(time * 2.5) * 0.3;
        }
    });

    return (
        <group onPointerDown={props.onPointerDown} position={[0, -3.8, 0]} dispose={null}>
            <group
                position={position}
                rotation={rotation}
                scale={scale}
            >
                <group ref={groupRef}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere010.geometry}
                        material={materials.Lighter}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere010_1.geometry}
                        material={materials.Grey}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere010_2.geometry}
                        material={materials["Magenta 2"]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/models/buttons/icon-button.glb");
