function App() {

const name = 'Mike'
var x = true

let array = ["1"]

array.forEach(element => {
  
console.log('xd ')
});

if(x===true){
  console.log('Hola')
}else{
  console.log(':(')
}

  return (
    <div className="container">
      <h1>Hello from React</h1>

      <h2>Hello {name}</h2>
      <h2>1+1</h2>
      <h2>{1+1}</h2>

      <h2>{x ? 'Yes' : 'No'}</h2>



    </div>
    

    
  );
}

export default App;
