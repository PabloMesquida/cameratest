import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Pencil = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/pencil.glb')
  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Material.004']} scale={[0.006, 0.005, 0.114]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['Material.002']} scale={[0.006, 0.005, 0.114]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials['Material.003']} scale={[0.006, 0.005, 0.114]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials['Material.005']} scale={[0.006, 0.005, 0.114]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials['Material.001']} scale={[0.006, 0.005, 0.114]} />
    </group>
  )
})

useGLTF.preload('./models/pencil.glb')

export default Pencil
