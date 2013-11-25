document.getElementById('convert').onclick = convert;
document.getElementById('convert').onclick = convert;


function convert(){
	var celsius = document.getElementById('celsius').value
	farhenheit = document.convertCelsiusToFarhenheit(celsius);
	document.getElementById('farhenheit').value = farhenheit;
	if (farhenheit > 100) {
		document.getElementById('farhenheit').value = 'hot!!';
	} else {
		document.getElementById('farhenheit').value = farhenheit;
	}
}

function convertCelsiusToFarhenheit(celsius) {
	var farhenheit = 9 / 5 * celsius + 32;
	return farhenheit
}

function convertFarhenheitToCelsius(farhenheit) {
	var celsius = (farhenheit - 32) * 5 / 9;
	return celsius
}