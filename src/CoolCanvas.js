import Real from './Real';
import GradientElement from './GradientElement';
import { Canvas } from "@react-three/fiber";
import {useRef} from "react";


export default function CoolCanvas(){
    const childRef = [useRef(0), useRef(1), useRef(2)];

    return (
        <div id='cool-canvas'>
            <GradientElement></GradientElement>
            <Canvas camera={{ fov: 40, position: [0,0,10]}} id='text' width='100%' onClick = {()=>childRef[0].current.currentText = (childRef[0].current.currentText+1)%3} onPointerOver={() => (childRef[0].current.extruded = true)} onPointerOut={() => (childRef[0].current.extruded = false)}>
            <Real forwardedRef={childRef}></Real>
            </Canvas>
        </div>
    )
}
