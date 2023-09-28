import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import favicon from '/favicon.ico'
import _bgsnow from '/bg-snow.svg'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className='fixed top-0 left-0 right-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white'>
          <Link className="text-4xl" to='/'>
          <img className="inline-block w-16 h-16" src={favicon} alt='logo'/>Social
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
