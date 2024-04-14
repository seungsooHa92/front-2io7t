import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PlaceLayout from './components/PlaceLayout'
import LoadingScreen from './LoadingLayout'
import About from './pages/About'
import Home from './pages/Home'
import DashBoard from './pages/Place/DashBoard'
import Income from './pages/Place/Income'
import Reviews from './pages/Place/Reviews'
import VanDetailPage from './pages/VanDetailPage'
import Vans from './pages/Vans'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="vans" element={<Vans />}></Route>
            <Route path="vans/:id" element={<VanDetailPage />}></Route>
            <Route path="place" element={<PlaceLayout />}>
              <Route index element={<DashBoard />} />
              <Route path="reviews" element={<Reviews />}></Route>
              <Route path="income" element={<Income />}></Route>
            </Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
