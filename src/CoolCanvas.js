import Real from './Real';
import GradientElement from './GradientElement';
import { Canvas } from "@react-three/fiber";
import {useRef} from "react";


export default function CoolCanvas(){
    const childRef = useRef(null);

    return (
        <div id='cool-canvas'>
            <GradientElement></GradientElement>
            <Canvas camera={{ fov: 40, position: [0,0,10]}} id='text' width='100%' onPointerOver={() => (childRef.current.extruded = true)} onPointerOut={() => (childRef.current.extruded = false)}>
            <Real forwardedRef={childRef}></Real>
            </Canvas>
        </div>
    )
}
