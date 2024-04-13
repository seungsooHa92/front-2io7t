import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingScreen from './LoadingLayout'
import About from './pages/About'
import Home from './pages/Home'
import VanDetailPage from './pages/VanDetailPage'
import Vans from './pages/Vans'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/vans" element={<Vans />}></Route>
            <Route path="/vans/:id" element={<VanDetailPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
