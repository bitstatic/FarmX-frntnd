import { useState } from 'react'
import './App.css'
import LoginSection from './Components/signin/LoginSection'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginSection />
    </div>
  )
}

export default App
