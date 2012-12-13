// Author: Esau	Rubio
// 12/12/12
// Project 4
// Utilities

var say = function (what) {
	console.log(what);
};

// Main Object
var main = {
	"user": function () { 
		var user = prompt("Who are you?")
		main.start(user);
	},
	"start": function (user) {
		var opts = parseInt(prompt(user + " - Please choose an option.\n========================\n1 - Check Phone Number\n2 - Check URL Address\n3 - Use a new Seperator\n4 - Convert Decimal to Money\n5 - Find Hours Between Dates\n6 - Convert String Number to Actual Number\n7 - Find Total Value of numbers in a User generated Array\n8 - Exit\n"));
		if ( opts > 0 && opts < 8 ) {
			var optsArray = [ "phone" , "url" , "seperator" , "decimal" , "date" , "stringToNumber" , "totalValue" ];
			options[optsArray[ opts - 1 ]](user)
		} else if (opts === 8) {
			main.quit(user);
		} else {
			main.error(user)
		}
	},
	"restart": function (user) {
		var cont = parseInt(prompt(user + " - Would you like to continue? \n 1 - To return to Main Menu \n 2 - to Exit" ));
		if (cont === 1) {
			main.start(user)
		} else if (cont === 2){
			main.quit(user)
		} else {
			main.error(user)
		};
	},
	"error": function (user) {
		say( "Sorry, " + user + " that is not a valid option. Please try again.")
		main.start(user)
	},
	"quit": function (user) {
		say( "Thanks " + user + " for trying my script!")
	}
};

var options = {
// String: Phone Number
	"phone": function (user) {
		var phoneNum = prompt( user + " please type in a Phone Number using this format \n xxx-xxx-xxxx");
		var areaCode = phoneNum.substring( 0 , phoneNum.indexOf("-") ) ,
			prefix = phoneNum.substring( phoneNum.indexOf("-") + 1 , phoneNum.lastIndexOf("-") ) ,
			suffix = phoneNum.substring( phoneNum.lastIndexOf("-") + 1 , phoneNum.length );
			number = areaCode + prefix + suffix
		if ( phoneNum.length === 12 && number !== NaN ) {
			say("Congratulations! " + phoneNum + " is a Phone Number!")
		} else if ( phoneNum.length === 10 && parseInt(phoneNum) !== NaN ) {
			say ("Well " + user + " it seems like " + phoneNum + " is a Phone Number, but please input it in the correct format.")
			options.phone(user)
		} else {
			say("Sorry " + user + " that is not a phone number.")
		};
		main.restart(user)
	},
// String: URL
	"url": function (user) {
		var testingurl = prompt( user + " please type in a URL for testing. \n Please use the proper Http or Https prefixes.");
		var checkHttp = testingurl.substring(0,7)
			checkHttps = testingurl.substring(0,8)
		if ( checkHttp.toLowerCase() === "http://" && testingurl.lastIndexOf(".") !== NaN ) {
			say( "Congratulations " + testingurl + " is a valid URL")
		} else if ( checkHttps.toLowerCase() === "https://" && testingurl.lastIndexOf(".") !== NaN ) {
			say( "Congratulations " + testingurl + " is a valid and secure URL")
		} else {
			say("Sorry " + user + " that is not a valid URL.")
		};
		main.restart(user)
	},
// String: Seperator
	"seperator": function (user) {
		var toSeperate = prompt( user + ' please type THREE entries seperated by a comma.\n Please use this format \n xxx , xxx , xxx');
		var	first  = toSeperate.substring( 0 , toSeperate.indexOf(",") ),
			second = toSeperate.substring( toSeperate.indexOf(",") + 1 , toSeperate.lastIndexOf(",") ),
			third  = toSeperate.substring( toSeperate.lastIndexOf(",") + 1 , toSeperate.length );
		if ( toSeperate.indexOf(",") !== -1 && toSeperate.lastIndexOf(",") !== -1 && toSeperate.lastIndexOf(",") !== toSeperate.indexOf(",")) {
			say( user + " here is the new output:\n " + first + "/" + second + "/" + third)
		} else {
			say( "Sorry " + user + " that input was invalid.")
		};
		main.restart(user)
	},
// Number: Decimal
	"decimal": function (user) {
		say("Decimal Test");
		var toDecimal = prompt( user + ' please type in a decimal number and it will be converted to Money\n From x.xx to $x.xx')
		var wholeNumber = toDecimal.substring( 0 , toDecimal.indexOf(".") ),
			decimal = toDecimal.substring( toDecimal.indexOf(".") + 1 , toDecimal.indexOf(".") + 3 );
		if ( toDecimal !== NaN && toDecimal.length >= toDecimal.indexOf(".") + 3 ) {

		} else if ( toDecimal !== NaN ) {

		} else {
			say( "Sorry " + user + " that input was invalid.")
		}
		main.restart(user)
	},
// Number: Dates
	"date": function (user) {
		say("Date Test");
		main.restart(user)
	},
// Number: String -> Number
	"stringToNumber": function (user) {
		say("String to Number Test");
		main.restart(user)
	},
// Array: Total Value
	"totalValue": function (user) {
		say("Total Value Test");
		main.restart(user)
	}
};

main.user()