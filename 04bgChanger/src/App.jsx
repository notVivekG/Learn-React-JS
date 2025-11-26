import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-400 " 
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className='bg-slate-300 justify-around p-3 flex gap-4 shadow-lg rounded-md '>
          <div 
            className='bg-red-600 rounded-xl p-2 cursor-pointer '
            onClick={() => setColor("red")}
          >
            Red 
          </div>
          <div className='bg-blue-600 rounded-xl p-2 cursor-pointer' onClick={() => setColor("blue")}>
            Blue 
          </div>
          <div className='bg-green-600 rounded-xl p-2 cursor-pointer' onClick={() => setColor("green")}>
            Green 
          </div>
          <div className='bg-yellow-600 rounded-xl p-2 cursor-pointer' onClick={() => setColor("yellow")}>
            Yellow 
          </div>
          <div className='bg-gray-600 rounded-xl p-2 cursor-pointer' onClick={() => setColor("gray")}>
            Gray 
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
