import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';







function App() {

  function getUsers() {
    return fetch(
      // Recibir email por medio de una variable
  
      `https://api.chess.com/pub/player/magnuscarlsen`
    ).then((resp) => resp.json())
  }


  useEffect(() => {
    const val = getUsers().then((resp) => {
  
      setData(resp)
      console.log(resp)
    })
  }, [])

  const [data, setData] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
