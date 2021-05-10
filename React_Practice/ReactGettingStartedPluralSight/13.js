// +1 button

function Button(props){
  return(
  <button onClick={props.onClickFunction}>
      +1
      </button>
  );
}

function Display(props){
  return(
  <div>{props.message}</div>
  );
}

function App(){
  const [counter, setCounter] = useState (8);
  const incrementCounter = () => setCounter(counter+1);
  return (
  <div>
      <Button onClickFunction={incrementCounter}/>
      <Display message={counter}/>
      </div>
  );
  
}




ReactDOM.render(
    <App/>,
  document.getElementById('mountNode'),
  );