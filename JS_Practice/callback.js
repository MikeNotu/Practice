function primero(segundo){
    setTimeout(function(){
        console.log("Primero");
        segundo();
    },3000);
} function segundo(){
    console.log("Segundo");
}
primero(segundo);