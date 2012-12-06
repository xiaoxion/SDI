// Author: Esau Rubio
// 12/05/12
// Project 3
// Supervisor Thoughts

// Global Variables
var supervisorName     = "Ray"                                  ,
	managerName        = "Esau"                                 ,
	supervisorMaxPrice = 8                                      ,
	footageCount       = 986                                    ,
	say                = function (text) {console.log(text)}    ;

// Main Object
var whoToGet = {
	"loop": function () {
		for (var key in otherCompanys.companys ) {
			var comp = otherCompanys.companys[key];
		};
	}, // loop
	"jobByDefault": function (otherCompanys) {
		for (var key in otherCompanys.companys ) {
			var comp = otherCompanys.companys[key];
			if (comp.price < 6) {
				say( supervisorName + ' says "Whoa! ' + comp.name + ' can do it at $' + comp.price + '! He\'s got the job!"');
				var gotByDefault = true;
			};
		};
		return gotByDefault
	}, // jobByDefault
	"recapOfCompany": function (comp) {
		if (comp.canDoJob === true) {
			say( supervisorName + ' thinks to himself "Hmm... ' + comp.name + ' Underground can do the job for $' + comp.price + '!"' );
			if (comp.price < 8) {
				say( supervisorName + ' thinks "Well that is a reasonable price."')
			} else {
				say( supervisorName + ' thinks "Maybe I can get him to lower it."')
			};
		} else {
			say( supervisorName + ' thinks to himself "Bah! ' + comp.name + ' Underground can\'t even do the job!"' );
		};
	}, // recapOfCompanys
	"whichCompanys": function (otherCompanys) {
		say( supervisorName + ' gets back to his office and is thinking who to hire.')
		for ( var key in otherCompanys.companys ) {
			var comp = otherCompanys.companys[key]
			whoToGet.recapOfCompany(comp);
		};
		return comp
	}, //whichCompanys
};

whoToGet.jobByDefault(otherCompanys);
whoToGet.whichCompanys(otherCompanys);
