import React from "react";
import {useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";

export default function Real(props) {
  const ref = props.forwardedRef

  useFrame((_, delta) => {
    if (ref.current.extruded && ref.current.scale.z < 100){
      ref.current.scale.z += delta*400 * -0.3*Math.log(ref.current.scale.z/100)
    }
    if (!ref.current.extruded && ref.current.scale.z > 1){
      ref.current.scale.z -= delta*300
    }
    ref.current.scale.z = Math.max(Math.min(ref.current.scale.z, 100), 1)
    ref.current.rotation.x = -ref.current.scale.z*0.002
    ref.current.rotation.y = -ref.current.scale.z*0.0005

  })

  return(
    <>
      <Center middle>
        <Text3D ref={ref} font= './roboto.json' size={5} height={0.01} extruded={false} >
        REAL
        <meshMatcapMaterial color="white"/>
      </Text3D>
      </Center>
      {/* <OrbitControls /> */}
    </>
  )
}