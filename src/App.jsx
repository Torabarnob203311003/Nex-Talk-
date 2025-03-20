import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Home from './Home'
import Room from './Pages/Room'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/room' element={<Room></Room>} />


    </Routes>
  )
}

export default App
