import { useState } from 'react'
import './App.css'
import LoginSection from './Components/signin/LoginSection'
import SignupSection from './Components/signup/SignupSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <LoginSection /> */}
      <SignupSection />
    </div>
  )
}

export default App
