import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Subjects from './Components/Subjects'
import Chapters from './Components/Chapters'
import Videolist from './Components/Videolist'
// import Videolisting from './Components/Videolisting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Subjects/>} />
    <Route path="/chapters/:id" element={<Chapters/>} />
    <Route path="/videolist/:id" element={<Videolist/>} />
    {/* <Route path="/videolisting/:id" element={<Videolisting/>} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
