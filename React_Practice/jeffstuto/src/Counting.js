import "./App.css"
import React, { useState, useEffect } from "react"

function Counting({ Mario2 }) {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    setContador(0)
    // console.log("Cambio, se volvio 0")
  }, [Mario2])

  return (
    <div className="App">
      <p>
        {}
        You pressed the button: {contador} time
        {(contador > 1 || contador === 0) && "s"}
      </p>
      <button onClick={() => setContador(contador + 1)}>
        {Mario2 ? Mario2 : "Hola Mama"}
      </button>
    </div>
  )
}

export default Counting
