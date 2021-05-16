const datos = [{
	id: 1,
	title: 'Iron Man',
	year: 2008
},{
	id:2,
	title: 'Spiderman: Homecoming',
	year: 2017
},{
	id:3,
	title:'Avengers: Endgame',
	year: 2019
}];

// const getDatos = () => {
// 	return datos;
// }

// Hace que tarde unos cuantos milisegundos el conseguir la info.
// const getDatos = () =>{
// 	setTimeout(()=>{
// 		return datos;
// 	},1500);
// }

const getDatos = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(datos);
		},1500);
	});
}
// console.log(getDatos());

getDatos()
.then((datos)=>console.log(datos));