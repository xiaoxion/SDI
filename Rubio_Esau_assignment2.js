// Author: Esau Rubio
// 11/24/2012
// Project 1
// Meeting with Supervisor

// Initial Variables
var supervisorName = "Ray"                                ,
    managerName    = "Esau"                               ,
    jobName        = "AT&T Job"                           ,
	footageCount   = 986                                  ,
	contractorNames = [ "Diggy" , "Driller" , "Dugger" ]
;

// Constant Variables
var say = function (what) {
	console.log (what)
};

// Dynamic Variables

// Procedure
var meetUp = function (response) {
	say("Hey " + managerName + " can you meet me at " + jobName + "?" );
	if (response === true) {
		say( managerName + ' says "Yeah, I will be there in a few!"' );
		say( managerName + ' arrives and asks "What do you need?"');
	} else {
		say( managerName + ' says "Not right now, what do you need?"' );
	};
};

// Boolean
var doJobNextWeek = function (canI) {
	say( supervisorName + ' says "Well, I need a job with ' + footageCount + ' feet by next week. Think you can do it?"' );
	if (canI === true) {
		say( managerName + ' says "Sure! We should be able to do that!"' );
	} else {
		say( managerName + ' says "No, that won\'t be possible."' );
	};
	canIDoIt = canI
	return canI;
};

// Number
var quotedPrice = function (howMuch) {
	if ( canIDoIt === true ) {
		say( supervisorName + ' says "That\'s great! What is the price per foot?"' );
		say( managerName + ' says "$' + howMuch + ' per foot sounds about right for this job."' );
		if ( howMuch < 8.00 ) {
			say( supervisorName + ' says "Sounds good to me!"')
		} else {
			say( supervisorName + ' says "That\'s a little high for this job.')
		};
	};
	howMuchIsIt = howMuch
	return howMuchIsIt
};

// String


// Array


// Output

meetUp( true );
doJobNextWeek( true );
quotedPrice( 7.75 );

