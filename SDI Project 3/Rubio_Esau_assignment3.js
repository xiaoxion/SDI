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

// How he decides who he is getting
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
				return [ gotByDefault , comp.price ]
			};
			var gotByDefault = false
			return gotByDefault
		};
		return gotByDefault
	}, // jobByDefault
	"recapOfCompany": function (comp) {
		if (comp.canDoJob === true) {
			say( supervisorName + ' thinks to himself "Hmm... ' + comp.name + ' Underground can do the job for $' + comp.price + '!"' );
			if (comp.price < supervisorMaxPrice) {
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
	}, // whichCompanys
	"lowerPrice": function (otherCompanys) {
		var maxPrice = supervisorMaxPrice,
			minPrice = 6,
			preference = "Best";
		for ( var key in otherCompanys.companys ) {
			var comp = otherCompanys.companys[key]
			if ( comp.price > maxPrice ) {
				while(comp.price > maxPrice && comp.price > comp.minMax[0]) {
					say( supervisorName + ' says "I wonder if ' + comp.name + ' will lower his price. Let me ask him!"');
					comp.price-=0.5
					say( supervisorName + ' says "Well. It looks like $' + comp.price + ' is the final price for ' + comp.name + '."');
					return comp.price;
				};
			} else {
				var fine = say( supervisorName + ' says "Well I think ' + comp.name + ' price is fine where it stands.')
				fine
				return fine;
			};
		};
	}
};

whoToGet.jobByDefault(otherCompanys);
whoToGet.whichCompanys(otherCompanys);
whoToGet.lowerPrice(otherCompanys);
