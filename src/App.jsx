import { BrowserRouter,Routes, Route } from 'react-router-dom' 
import VistaGeneral from './VistaGeneral'
import VistaEspecifica from './VistaEspecifica'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<VistaGeneral/>} path="/"/>
            <Route element={<VistaEspecifica/>} path="/vistaespecifica/:tipo/:name"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
