import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import VanDetailPage from './pages/VanDetailPage'
import Vans from './pages/Vans'

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          ROOT
        </Link>
        <nav>
          <Link to="/about"> About</Link>
          <Link to="/vans"> Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
        <Route path="/vans/:id" element={<VanDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
