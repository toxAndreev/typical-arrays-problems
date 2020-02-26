
function my(x) {
	return x.sort((a,b) => a-b);
}
exports.min = function min (array) {

	 return (typeof(array) == 'undefined' || array.length == 0)?0:my(array)[0];
	
}

exports.max = function max (array) {
	
	 return (array == undefined || array.length == 0)?0:my(array)[my(array).length-1];
	
}

exports.avg = function avg (array) {
	
	 return (array == undefined || array.length == 0)?0:my(array).reduce((sum, current) => sum + current, 0)/my(array).length;
	
}
