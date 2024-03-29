// Author: Esau Rubio
// 11/24/2012
// Project 1
// Meeting with Supervisor

// Initial Variables
var supervisorName  = "Ray"                                ,
    managerName     = "Esau"                               ,
    jobName         = "AT&T Job"
;

// Constant Variables
var say = function (what) {
	console.log (what)
};

// Procedure
var meetUp = function (response) {
	say("Hey, " + managerName + " can you meet me at " + jobName + "?" );
	if (response === true) {
		say( managerName + ' says "Yeah, I will be there in a few!"' );
		say( managerName + ' arrives and asks "What do you need?"');
	} else {
		say( managerName + ' says "Not right now, what do you need?"' );
	};
};

// Boolean
var doJobNextWeek = function (canI , footageCount) {
	say( supervisorName + ' says "Well, I need a job with ' + footageCount + ' feet by next week. Think you can do it?"' );
	if (canI === true) {
		say( managerName + ' says "Sure! We should be able to do that!"' );
	} else {
		say( managerName + ' says "No, that won\'t be possible."' );
	};
	var canIDoIt = canI
	return canIDoIt;
};

// Number
var quotedPrice = function (howMuch) {
	var otherPrices = [ 8.00 , 9.00 , 9.75 ]
	if ( canIDoIt === true ) {
		say( supervisorName + ' says "That\'s great! What is the price per foot?"' );
		say( managerName + ' says "How about $' + howMuch + ' per foot."' );
		while ( howMuch > otherPrices[0] ) {
			say( supervisorName + ' says "That\'s a little high. Can you lower it?')
			howMuch--
			say( managerName + ' says "How about $' + howMuch + ' per foot."' );
		};
		say( supervisorName + ' says "Sounds good to me!"')
	};
	howMuchIsIt = howMuch
	return howMuchIsIt
};

// String
var cheapGuys = function ( guy1 , guy2 ) {
	if ( canIDoIt === true ) {
		var randomnumber = 1
		if ( randomnumber === 0 ) {
			say( supervisorName + ' says "Whoops! Hold on ' + guy1 + ' is calling me back from earlier."' );
			var string = say( supervisorName + ' says "Whoa, sorry ' + guy1 + ' undercut you with $' + (howMuchIsIt - 1 ) +'."');
			string;
			return string;
		} else {
			say( supervisorName + ' says "Whoops! Hold on ' + guy2 + ' is calling me back from earlier."' );
			var string = say( supervisorName + ' says "Whoa, ' + guy2 + ' wanted the job at $' + (howMuchIsIt + 1 ) +'! He\'s crazy!"');
			string;
			return string;
		};
	};
};

// Array
var otherContractors = function ( howMuchIsIt , newContractors ) {
	var otherPrices = [ (howMuchIsIt + 0.25) , (howMuchIsIt + 1.55) , (howMuchIsIt + 0.25) ];
	say( supervisorName + ' says "Hold on let me get more quotes before I give you the job."');	
		for ( contractors = 0 ; contractors < newContractors.length ; contractors++ ) {
			if ( otherPrices[contractors] < howMuchIsIt ) {
				say( supervisorName + ' says "' + newContractors[contractors] + ' Underground is cheaper? I am going with him.')
				return otherPrices[contractors];
			} else {
				say( supervisorName + ' says "' + newContractors[contractors] + ' Underground is a no go!');
			};
		};
};

// Returned Values
meetUp( true );
doJobNextWeek( true , 986 );
quotedPrice( 8.75 );
cheapGuys( "Jason" , "Bob" );
otherContractors( howMuchIsIt , [ "Diggy" , "Driller" , "Dugger" ])
if (doJobNextWeek = true) {
	say("Congrats! You got the Job!")
} else {
	say("Sorry about the Job!")
};