function ucfirst(string){
	return string[0].toUpperCase() + string.slice(1);
}

function capitalize(string){
	finalString = "";
	var arrayOfStrings = string.split(" ");
	for (var i = 0; i < arrayOfStrings.length; i++) {
		finalString += ucfirst(arrayOfStrings[i]) + " ";
	}
	return finalString;
}

function camelCase(string){
	finalString = "";
	var arrayOfStrings = string.split(" ");
	for (var i = 0; i < arrayOfStrings.length; i++) {
		finalString += ucfirst(arrayOfStrings[i]);
	}
	return finalString;
}

function snake_case(string){
	return string.split(' ').join('_');
}

function leet(string){
	string = string.toLowerCase();
	string = string.split('a').join('4');
	string = string.split('e').join('3');
	string = string.split('i').join('1');
	string = string.split('o').join('0');
	string = string.split('u').join('(_)');
	string = string.split('y').join('7');
	return string;
}

function prop_access(object, string) {
    var path = string.split(".");
    var result = object;
    for (var step in path) {
        if (typeof result[path[step]] !== "undefined") {
            result = result[path[step]];
        } else {
            result = undefined;
            break;
        }
    }
    return result;
}

function reverse(string) {
  var finalString = "";
  for (var i = string.length - 1; i >= 0; i--)
    finalString += string[i];
  return finalString;
}

function verlant(string){
	finalString = "";
	var arrayOfStrings = string.split(" ");
	for (var i = 0; i < arrayOfStrings.length; i++) {
		finalString += reverse(arrayOfStrings[i]) + " ";
	}
	return finalString;
}

function yoda(string){
	finalString = "";
	var arrayOfStrings = string.split(" ");
	for (var i = arrayOfStrings.length - 1; i >= 0; i--) {
		finalString += arrayOfStrings[i] + " ";
	}
	return finalString;
}

function vig(string,key){
	finalString = "";
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	for (var i = 0; i < string.length; i++) {
		x = alphabet.indexOf(string[i]);
		y = alphabet.indexOf(key[i%key.length]);
		finalString += alphabet[(x+y)%26];
	}
	return finalString;
}