// Console Log random number everytime the button is clicked (Using arrow Function)

function Button(){
  const [counter,setCounter] =useState(0);
  return <button onClick={() => console.log(Math.random())}>{counter}</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
  );