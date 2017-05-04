var sha3 = require('solidity-sha3').default;
var hex2decimal = require('hex2decimal');

var startDate = 1493895600/3600;
var now = Number(new Date())/3600000;
var hash = sha3('salutssasslut');

var words;
var letters = ['0','1','2','3','4','5','6','7','8','9']
var seedWord

function mix2 () {
	words = [process.argv[2],process.argv[3]]
	var mixedNames = []
	for (var i=0; i<300; i++) {
		var indexWord1 = Math.floor((Math.random() * 8) + 1) -1
		var indexWord2 = Math.floor((Math.random() * 8) + 1) -1
		var lowerWordIndex;
		var higherWordIndex;
		console.log(indexWord1)
		console.log(indexWord2)
		if (indexWord2 == indexWord1) {indexWord2++;}
		if (indexWord1 > indexWord2) {
			seedWord = [words[1],words[0]]
			lowerWordIndex = indexWord2
			higherWordIndex = indexWord1
		}
		if (indexWord1 < indexWord2) {
			seedWord = [words[0],words[1]]
			lowerWordIndex = indexWord1
			higherWordIndex = indexWord2
		}
		console.log(lowerWordIndex)
		console.log(higherWordIndex)
		console.log(seedWord)
		for (var j=0; j<lowerWordIndex; j++) {
			seedWord.splice(0,0,letters[Math.floor((Math.random() * 10) + 1) -1])
			// console.log(seedWord)
			mixedNames.push(seedWord.join(''))
		}
		for (var k=lowerWordIndex+1; k<higherWordIndex; k++) {
			seedWord.splice(lowerWordIndex+1,0,letters[Math.floor((Math.random() * 10) + 1) -1])
			// console.log(seedWord)
			mixedNames.push(seedWord.join(''))
		}
		for (var p=higherWordIndex+1; p<8; p++) {
			seedWord.splice(higherWordIndex+1,0,letters[Math.floor((Math.random() * 10) + 1) -1])
			// console.log(seedWord)
			mixedNames.push(seedWord.join(''))
		}
		
	}
	
	mixedNames.forEach(function(name,k,names){
		if(timeLeftBool(name)) {
			console.log('Found a Name to bid on!! Name: '+ name)
		}
	})

	
}

function mix1 () {

	var mixedNames = []
	words = [process.argv[2]]
	for (var i=0; i<300; i++) {
		var indexWord = Math.floor((Math.random() * 8) + 1) -1
			seedWord = [words[0]]
		for (var j=0; j<indexWord; j++) {
			seedWord.splice(0,0,letters[Math.floor((Math.random() * 10) + 1) -1])
			mixedNames.push(seedWord.join(''))
		}
	}
	
	mixedNames.forEach(function(name,k,names){
		if(timeLeftBool(name)) {
			console.log('Found a Name to bid on!! Name: '+ name)
		}
	})

	
}



function timeLeftBool (string) {
	var timeLeftHour = startDate + 8*7*24*hex2decimal(sha3(string))/(2**256) - now
	var timeLeftDay = timeLeftHour/24	
	if (timeLeftHour<2) {return true}
	else return false
}



if (process.argv[3] == 'undefined') {
	mix1()
}
else (mix2())

