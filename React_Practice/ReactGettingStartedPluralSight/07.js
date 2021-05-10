// Counter Button +5

function Button(){
  const [counter,setCounter] =useState(5);
  return <button onClick={()=>setCounter(counter+5)}>{counter}</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
  );