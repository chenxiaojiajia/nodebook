function censor(inStr){
	for(var idx  in censoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	for(idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}

function addCensorWords(word){
	return censoredWords.push(word);
}
function getCensorWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensorWords = addCensorWords;
exports.getCensorWords = getCensorWords;