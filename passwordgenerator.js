function changeVocals (str) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz"
	var arrayAplha = alphabet.split("")
	var pecahStr = str.split("")
	var newStr = ""
	
	for(var i=0; i<pecahStr.length; i++){
			Sementara = ""
	if(pecahStr[i] === "a" || pecahStr[i] === "i" || pecahStr[i] === "u" || pecahStr[i] === "e" || pecahStr[i] === "o" ){
		for(var j=0; j<arrayAplha.length; j++){
			if(arrayAplha[j] === pecahStr[i] ){
				Sementara += arrayAplha[j+1]
			}else if(pecahStr[i] === arrayAplha[j].toUpperCase("")){
				Sementara += pecahStr[i]

			}

		}
	}else{

		Sementara += pecahStr[i]
	}
			newStr += Sementara
}
return newStr
}

function reverseWord (str) {
var strChange = changeVocals(str).split("")
var newStrReverse = ""
for(var i=strChange.length-1; i >= 0; i--){
	newStrReverse += strChange[i]
}

return newStrReverse

}

function setLowerUpperCase (str) {
var strReverse = reverseWord(str).split("")
var strLoweer = ""
for(var i=0; i<strReverse.length; i++){
	var sementara = ""
	if(strReverse[i] !== " "){

		if(strReverse[i] !== strReverse[i].toLowerCase("")){
			sementara += strReverse[i].toLowerCase("")
		}else if(strReverse[i] !== strReverse[i].toUpperCase("")){
			sementara += strReverse[i].toUpperCase("")
		}

	}else{

		sementara += strReverse[i]
		
	}

	strLoweer += sementara
}
return strLoweer

}

function removeSpaces (str) {
var hasilGantiHuruf = setLowerUpperCase(str)
var pisahStr = hasilGantiHuruf.split(" ")
var gabungStr = pisahStr.join("")

return gabungStr
}

function passwordGenerator (name) {
var finis = removeSpaces(name)

if(name.length > 5){
	return finis
}else{
	return "Minimal karakter yang diinputkan adalah 5 karakter"
}
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

