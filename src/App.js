import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import { Home, Info, SingleRes } from './pages/index'
// Components
import { Navbar, Footer } from './components/index'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/info/type' element={<Info />} />
      </Routes>
      <Routes>
        <Route path='/restaurant/:id' element={<SingleRes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
