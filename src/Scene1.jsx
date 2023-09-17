import { useRef, useState } from 'react'
import { MathUtils } from 'three'
import { useNavigate  } from 'react-router-dom';
import {CameraControls, Environment } from '@react-three/drei'
import Ground from './Ground'
import Shadows from './Shadows'
import Arcade from "./Arcade"
import Desk from "./Desk"
import Cup from "./Cup"
import Pencil from "./Pencil"

export default function Scene1() {
    const [isActive, setIsActive] = useState(true)
    const cameraControlsRef = useRef();
    const screenRef = useRef();
    const deskRef = useRef();
    const cupRef = useRef();
    const pencilRef = useRef();

    const navigate = useNavigate ();

    const { DEG2RAD } = MathUtils

    const goToScene = () => {
        console.log("OK")
        setIsActive(false)
        const scrPos = screenRef.current.position;

        cameraControlsRef.current.azimuthRotateSpeed = 0
        cameraControlsRef.current.polarRotateSpeed = 0
        cameraControlsRef.current?.setLookAt(scrPos.x + 0.3 , scrPos.y + 0.15, scrPos.z, scrPos.x, scrPos.y + 0.09, scrPos.z, true)
       
        cameraControlsRef.current?.addEventListener( 'sleep', () => {
            console.log("END"),
            cameraControlsRef.current.enabled = false
            navigate('game');
        } );
    }

    const config = {
        dollySpeed: 0,
        minPolarAngle: Math.PI/4,
        maxPolarAngle: Math.PI/2.5,
        minAzimuthAngle: Math.PI/9,
        maxAzimuthAngle: Math.PI/2,
        makeDefault: true,
        verticalDragToForward: false
      };

    return(
        <>
            <CameraControls ref={ cameraControlsRef } {...config} />
            <Shadows />
            <Ground />
            <Environment preset='city' />
            <Arcade position={[-1,0,2]} onClick={isActive ? goToScene : null}/>
            <mesh ref={screenRef} rotation={[ 0, Math.PI/2, 0]}  position={[-1.05, 1.6, 1.98]}>
                <planeGeometry args={[ 0.5, 0.5]} />
                <meshBasicMaterial visible={false} />
            </mesh>
            <Desk position={[1,0,-2]} scale={1.6}/>
            <Cup position={[0.6,1.2,-1.3]} scale={0.01}/>
            <Pencil position={[1,1.205,-1.5]} rotation={[0,0.5,0]}/>
        </>
    );
}