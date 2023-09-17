import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Cup = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/cup.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cappuccino.geometry} material={materials.Capuccino} position={[0, 6.052, 1.013]} scale={5.318} />
      <mesh castShadow receiveShadow geometry={nodes.Handle.geometry} material={materials.Tazza} position={[0, 6.746, -5.493]} rotation={[-1.337, 0, 0]} scale={[1.161, 1.135, 0.558]} />
      <mesh ref={ref} castShadow receiveShadow geometry={nodes.Cup.geometry} material={materials.Tazza} position={[0, 6.915, 1.013]} scale={[5.813, 8.153, 5.813]} />
      <mesh castShadow receiveShadow geometry={nodes.Base.geometry} material={materials.Base} position={[0, 1.171, 1.013]} scale={9.082} />
      <mesh castShadow receiveShadow geometry={nodes.Stick.geometry} material={materials['Legno paletta']} position={[-4.16, 6.941, -1.541]} rotation={[0.205, -0.401, -1.224]} scale={-4.57} />
      <mesh castShadow receiveShadow geometry={nodes.Sugar.geometry} material={materials.Bustina} position={[5.719, 1.328, 0.726]} scale={1.458} />
    </group>
  )
})

useGLTF.preload('./models/cup.glb')

export default Cup
