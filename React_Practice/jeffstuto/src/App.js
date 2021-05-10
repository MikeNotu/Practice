import "./App.css"
import React, { useState } from "react"
import "./custom.css"
import Counting from "./Counting"

function App() {
  const [Mario, setMario] = useState("")

  return (
    <div className="App">
      <input
        type="text"
        value={Mario}
        onChange={(e) => setMario(e.target.value)}
      />
      <Counting Mario2={Mario} />
    </div>
  )
}

export default App
