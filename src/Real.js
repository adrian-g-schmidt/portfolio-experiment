import React , {useRef} from "react";
import {useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { BlendFunction } from 'postprocessing'
import { EffectComposer, Noise } from "@react-three/postprocessing";


export default function Real(props) {
  const ref = props.forwardedRef
  const meshRef = [useRef(0), useRef(1), useRef(2)]

  useFrame((_, delta) => {
    for (let i=0; i<meshRef.length; i++){
      if (i === ref[0].current.currentText){
        ref[i].current.extruded = true;
      } else {
        ref[i].current.extruded = false;
      }

      if (ref[i].current.extruded && ref[i].current.scale.z < 80){
        ref[i].current.scale.z += delta*400 * -0.1*Math.log(ref[i].current.scale.z/80)
      }
      if (!ref[i].current.extruded && ref[i].current.scale.z > 1){
        ref[i].current.scale.z -= delta*50
      }
      ref[i].current.scale.z = Math.max(Math.min(ref[i].current.scale.z, 80), 1)
      meshRef[i].current.color.r = 1-(ref[i].current.scale.z/150)
      meshRef[i].current.color.g = 1-(ref[i].current.scale.z/150)
      meshRef[i].current.color.b = 1-(ref[i].current.scale.z/300)
    }

  })

  return(
    <>
      <Center middle>
        <Text3D ref={ref[0]} font= './roboto.json' size={5} height={0.01} extruded={false} currentText={0}>
        REAL
        <meshMatcapMaterial ref={meshRef[0]} color = {'white'}/>
        </Text3D>
      </Center>
      <Center middle>
        <Text3D ref={ref[1]} font= './roboto.json' size={5} height={0.01}>
        REFINED
        <meshMatcapMaterial ref={meshRef[1]} color = {'white'}/>
        </Text3D>
      </Center>
      <Center middle>
        <Text3D ref={ref[2]} font= './roboto.json' size={5} height={0.01}>
        RESONATE
        <meshMatcapMaterial ref={meshRef[2]} color = {'white'}/>
        </Text3D>
      </Center>

      <mesh>
        <planeGeometry args={[100, 10]}/>
        <meshMatcapMaterial 
        color={'white'}
        />
      </mesh>

      {/* <OrbitControls /> */}
      <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.ADD} />
      </EffectComposer>
    </>
  )
}