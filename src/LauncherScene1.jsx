import { Canvas } from "@react-three/fiber"
import Scene1 from "./Scene1"

function LauncherScene1() {

  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 60 }}>
      <Scene1 />
    </Canvas>
  )
}

export default LauncherScene1
