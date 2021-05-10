import React, { useState } from "react"

function logRandom() {
  console.log(Math.random())
}

function Button() {
  const [counter, setCounter] = useState(0)
  return <button onClick={logRandom}>{counter}</button>
}

export default Button
