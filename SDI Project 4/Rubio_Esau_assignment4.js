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
		var opts = parseInt(prompt(user + " - Please choose an option.\n========================"));
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
		var cont = parseInt(prompt(user + " - Would you like to continue? \n 1 - To return to Main Menu \n Anything else to Exit" ));
		if (cont === 1) {
			main.start(user)
		} else {
			main.quit(user)
		}
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
		say("Phone Test");
		var phoneNum = parseInt(prompt( user + " please type in a Phone Number using this format \n xxx-xxx-xxxx"));
		if ( phoneNum ) {

		};
		main.restart(user)
	},
// String: URL
	"url": function (user) {
		say("URL Test");
		main.restart(user)
	},
// String: Seperator
	"seperator": function (user) {
		say("Seperator Test");
		main.restart(user)
	},
// Number: Decimal
	"decimal": function (user) {
		say("Decimal Test");
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