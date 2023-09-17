import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Arcade = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/arcade.glb')
  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} castShadow receiveShadow geometry={nodes.lowpolyok004__desktop_baseLP_Cube069005002.geometry} material={materials.arcade_machine} />
    </group>
  )
})

useGLTF.preload('./models/arcade.glb')

export default Arcade;
