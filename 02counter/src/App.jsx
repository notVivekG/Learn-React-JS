import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter<20){
      console.log("counter increased to ", counter);
      setCounter(counter+1)
      // setCounter(counter => counter+1)
    }
    else{console.log("value cannot be more than 20")}
  }

  const removeValue = () => {
    if(counter>0){
      console.log("counter decreased to ", counter)
      setCounter(counter-1)
    }
    else{console.log("value cannot be less than 0")}
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease value</button>
    </>
  )
}

export default App
