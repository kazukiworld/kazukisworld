import React from 'react';
import InfoIconBtn from '../3DModels/InfoIconBtn';
import useNavStore from '@/lib/zustand/useNavStore';

const buttonData = [
    {
        info: 'I can speak both English and Japanese Fluently.',
        position: [-4.374, 4.354, 7.533],
        rotation: [0, -0.506, 0],
        scale: [0.2, 0.2, 0.109]
    },
    {
        info: 'I am a morning person that likes to wake up early.',
        position: [-7.789, 4.536, 3.397],
        rotation: [0, -1.396, 0],
        scale: [0.2, 0.2, 0.109]
    },
    {
        info: 'I enjoy nature and activities like hiking.',
        position: [-5.768, 6.097, -7.218],
        rotation: [-Math.PI, -0.405, -Math.PI],
        scale: [0.2, 0.2, 0.109]
    },
    {
        info: 'I enjoy a variety of hobbies from embroidering, crocheting, to drawing.',
        position: [0.356, 3.634, -8.512],
        rotation: [-Math.PI, 0, -Math.PI],
        scale: [0.2, 0.2, 0.109]
    },
    {
        info: 'I love working out!',
        position: [4.497, 3.904, -7.44],
        rotation: [-Math.PI, 0.361, -Math.PI],
        scale: [0.2, 0.2, 0.109]
    },
    {
        info: 'I love sewing!',
        position: [6.752, 4.46, 2.925],
        rotation: [0, 1.222, 0],
        scale: [0.2, 0.2, 0.109]
    }
];

export default function InfoIconViewer() {
    const { setCurrentInfo, setOpenModal} = useNavStore();

    return (
        <group>
            {buttonData.map((button, index) => (
                <InfoIconBtn
                    key={index}
                    onPointerDown={() => {setCurrentInfo(button.info); setOpenModal(true)}}
                    position={button.position}
                    rotation={button.rotation}
                    scale={button.scale}
                />
            ))}
        </group>
    );
}
