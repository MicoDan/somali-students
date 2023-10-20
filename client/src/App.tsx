import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import Learn from './pages/Learn'
import Lesson from './pages/Lesson'
import Leaderboard from './pages/leaderboard'
import Profile from './pages/profile'
import Shop from './pages/shop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Coach from './pages/settings/coach'
import Sound from './pages/settings/sound'
import Account from './pages/settings/account'

function App() {
  

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/lesson' element={<Lesson />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/settings/coach' element={<Coach />} />
        <Route path='/settings/sound' element={<Sound />} />
        <Route path='/settings/account' element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
