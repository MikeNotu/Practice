// Rendering two functions using <div>

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


ReactDOM.render(
  <div> 
  <Button />
    <Display/>
   </div>,
  document.getElementById('mountNode'),
  );