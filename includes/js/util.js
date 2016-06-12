var removeAndGetFromArrayAtIndex = function(array, i) {
	var value = array[i];
	array.splice(i, 1);
	return value;
};