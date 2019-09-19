function generateRandomString(desiredLengthOfRandomString) {
	var result = '';
	var possibleCharactersForRandomString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i=0; i < desiredLengthOfRandomString; i++ )
	    result += possibleCharactersForRandomString.charAt(Math.floor(Math.random() * possibleCharactersForRandomString.length));

	return result;
}

var randomString = generateRandomString(4);

var output = {'randomString': randomString};
