// Rendering a function that uses other two functions

function Button(){
  const [counter,setCounter] = useState(0);
  const handleClick = () => setCounter(counter+1);
  return (
    <button onClick={handleClick}>
      {counter}
    </button>
  );
}

function Display(){
  return(
  <div>. . .</div>
  )
}

function App(){
  return(
  <div>
      <Button/>
      <Display/>
      </div>
  )
}


ReactDOM.render(
    <App/>,
  document.getElementById('mountNode'),
  );