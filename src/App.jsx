// Import vendor dependencies
import {BrowserRouter, Routes, Route} from 'react-router';
// Import Local Components
import { DashBoard } from './pages/Dashboard'
// Import Assets

import { Layout } from './pages/Layout';
import { Detail } from './pages/Detail';
import { Tienda } from './pages/Tienda';
import { About } from './pages/About';
import { Carrito } from './pages/Carrito';
import { Pagos } from './pages/Pagos';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/tienda" element={<Tienda/>} />
        <Route path="/about-me" element={<About/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/pagos" element={<Pagos/>} />
        <Route path="/detail/:pokecod" element={<Detail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
