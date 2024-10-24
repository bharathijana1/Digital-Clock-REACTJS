import { useState } from 'react'
import './App.css'
import { DigitalClockIndex } from './components/DigitalClockIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="border border-warning text-center">
    <DigitalClockIndex />
      
    </div>
  )
}

export default App
