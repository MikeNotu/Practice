// Random Number displays inside a Button

function Button(){
  return <button>{Math.random()}</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
  );