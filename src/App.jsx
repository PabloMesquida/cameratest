import { Routes, Route } from "react-router-dom"
import Game from "./Game"
import LauncherScene1 from "./LauncherScene1"



function App() {

  return (
    <Routes>
      <Route path='/' element={<LauncherScene1 />} />
      <Route path='/game' element={<Game />} /> 
    </Routes>
  )
}

export default App
