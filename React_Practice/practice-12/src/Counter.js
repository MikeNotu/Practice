import React, { useState } from "react"

function Counter() {
  const [state, setState] = useState(0)

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(state + 1)
        }}
      >
        Press Me
      </button>
    </div>
  )
}

export default Counter
