const sym1 = Symbol();
const sym2 = Symbol();
sym1 === sym2

const sym3 = Symbol('cat');
const sym4 = Symbol('cat');
sym3 === sym4

let user = {
	id : 9451,
	name : 'Dominique',
	city: 'Siena',
	age : 59
};

const idSym = Symbol('id');
user[idSym] =12312318249;

const idSym = Symbol('id');
let user = {
	id : 9451,
	name : 'Dominique',
	city :'Siena',
	age: 59,
	[idSym] : 234923490234
};

Object.getOwnPropertyNames(user)
Object.getOwnPropertySymbols(user)


const sym1 = Symbol.for('cat');
const sym2 = Symbol.for('cat');