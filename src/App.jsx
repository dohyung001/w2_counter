import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => { console.log("increase 가 클릭됨"); setCount(count + 1) }}>+1</button>
      <button onClick={() => { console.log("decrease 가 클릭됨"); setCount(count - 1) }}>-1</button>
    </div>

  )
}

export default App
