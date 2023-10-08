import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import _bgsnow from '/bg-snow.svg'
import Learn from './pages/Learn'
import { ToastContainer } from 'react-toastify'
import Lesson from './pages/Lesson'
import Leaderboard from './pages/leaderboard'
import Profile from './pages/profile'
import Shop from './pages/shop'

function App() {
  return (
    <BrowserRouter>
      <div>
      <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/lesson' element={<Lesson />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
