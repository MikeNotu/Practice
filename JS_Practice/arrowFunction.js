(param1, param2) => {statements}
(param1, param2) => expression
(param1, param2) => {return expression;}

(singleParam) => {statements}
singleParam => {statements}

() => {statements}
() => expression
() => {return expression;}

(param1, param2, paramN) => expression

var multiply = function(x,y){
	return x * y;
};

var multiply = (x,y) => { return x * y};

var multiply = (x,y) => x*y;

var materials = [
'Hydrogen',
'Helium',
'Lithium',
'Beryllium'
];

var materialsLength1 = materials.map(function(material){
	return material.length;
});

var materialsLength2 = materials.map((material)=>{
	return material.length;
});

var materialsLength3 = materials.map(material => material.length);

function Person(){
	this.age = 0;

	setInterval(()=>{
		this.age++;
	},1000);
}

var p = new Person();

var func = () =>({foo:1});

var func = () =>1
