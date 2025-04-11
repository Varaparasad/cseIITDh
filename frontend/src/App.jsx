import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-50 font-roboto'>
        <Navbar />
      </div>
      Workin on this.
    </>
  )
}

export default App
