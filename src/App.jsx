import { useState } from 'react'
/*eslint-disable no-unused-vars */

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Dolls fantasy Dreams </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
