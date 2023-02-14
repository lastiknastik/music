import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Login from './pages/login/index'
import Registr from './pages/registr/index'
import Playlist from './pages/playlist/index'
import { ProtectedRoute } from './comps/protected-route'

export const AppRoutes = () => {
  let isAllowed = false
  if (document.cookie.split(';').includes('token')) {
    isAllowed = true
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/mytracks" element={<Playlist />} />
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
      </Routes>
    </BrowserRouter>
  )
}
