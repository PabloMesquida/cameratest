import { forwardRef} from 'react'
import { useGLTF } from '@react-three/drei'

const Desk = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./models/desk.glb')
  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} castShadow receiveShadow geometry={nodes.bedroom_desk.geometry} material={materials.bedroom_desk} />
    </group>
  )
})

useGLTF.preload('./models/desk.glb')

export default Desk
