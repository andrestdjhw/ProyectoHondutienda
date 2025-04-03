// Import vendor dependencies
import {BrowserRouter, Routes, Route} from 'react-router';
// Import Local Components
import { DashBoard } from './pages/Dashboard'
// Import Assets

import { Layout } from './pages/Layout';
import { Detail } from './pages/Detail';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/my-collection" element={<section>Colección</section>} />
        <Route path="/about-me" element={<section>About Me</section>} />
        <Route path="/detail/:pokecod" element={<Detail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
