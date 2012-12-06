alert("JavaScript works!");

// Author: Esau Rubio
// 12/05/12
// Project 3
// Meeting With Supervisor

// Global Variables
var supervisorName     = "Ray"                                  ,
	managerName        = "Esau"                                 ,
	supervisorMaxPrice = 8                                      ,
	managerMinPrice    = 7                                      ,
	footageCount       = 986                                    ,
	otherCompanys      = [ "Digger" , "Driller" , "Dugger" ]    ,
	say                = function (text) {console.log(text)}    ;

// Main Object
var getJob = {
	meetUp: function (response) {
			say("Hey, " + managerName + " can you meet me at " + jobName + "?" );
		if (response === true) {
			say( managerName + ' says "Yeah, I will be there in a few!"' );
			say( managerName + ' arrives and asks "What do you need?"');
		} else {
			say( managerName + ' says "Not right now, what do you need?"' );
		} 
	}, // meetUp
	canDoJobNextWeek: function (canI , footageCount) {
			say( supervisorName + ' says "Well, I need a job with ' + footageCount + ' feet by next week. Think you can do it?"' );
		if (canI === true) {
			say( managerName + ' says "Sure! We should be able to do that!"' );
		} else {
			say( managerName + ' says "No, that won\'t be possible."' );
		};
		var canIDoIt = canI;
		return canIDoIt;
	} // canDoJobNextWeek
};