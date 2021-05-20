const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const cat = 'blue';


function getThreatLevel(color){

	switch(color){
		case RED:
		return 'severe';
		case ORANGE:
		return 'high';
		case YELLOW:
		return 'elevated';
		case BLUE:
		return 'low'
		default:
		console.log("IDK that COLOR!");
	}
}

getThreatLevel(BLUE)
getThreatLevel(cat)