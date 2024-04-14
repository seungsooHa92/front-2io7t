import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PlaceLayout from './components/PlaceLayout'
import LoadingScreen from './LoadingLayout'
import About from './pages/About'
import Home from './pages/Home'
import DashBoard from './pages/Place/DashBoard'
import Income from './pages/Place/Income'
import PlaceVans from './pages/Place/PlaceVans'
import PlaceVansDetailPage from './pages/Place/PlaceVansDetailPage'
import Reviews from './pages/Place/Reviews'
import VanDetailPage from './pages/VanDetailPage'
import Vans from './pages/Vans'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetailPage />} />
            </Route>
            <Route path="place" element={<PlaceLayout />}>
              <Route index element={<DashBoard />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="income" element={<Income />} />
              <Route path="vans">
                <Route index element={<PlaceVans />} />
                <Route path=":id" element={<PlaceVansDetailPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
