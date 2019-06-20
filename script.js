// Global vars
const startDate = new Date('11 June 2019 12:00:00 CDT');
const endDate = new Date('1 November 2019 12:00:00 CDT');
var currDate = endDate;
var currStr = "End Date";

var dates = [
	{
		date: "03 July 2019 20:30:00 CDT",
		label: "Fourth of July"
	},
	{
		date: "1 August 2019 12:00:00 CDT",
		label: "GenCon"
	},
	{
		date: "14 August 2019 12:00:00 CDT",
		label: "Skye visits CA"
	},
	{
		date: "29 August 2019 12:00:00 CDT",
		label: "Labor Day"
	},
	{
		date: "11 September 2019 12:00:00 CDT",
		label: "Pinegrove"
	},
	{
		date: "17 October 2019 12:00:00 CDT",
		label: "Skye's Birthday"
	},
	{
		date: endDate,
		label: "End Date"
	},
]

$(document).ready(function(){
	updatePercent();
	appendOptions();

	// When an option is clicked, adjusts bar to that option
	$("#options div").click(function(){
		// find date by the div content
		var label = $(this).html();
		var d = dates.find(function(elem){
			return elem.label == label;
		});
		console.log(d);
		currDate = new Date(d.date);
		currStr = d.label;

		updatePercent();
	});
	// update every 5 seconds
	setInterval(updatePercent, 5000);
});



function appendOptions(){
	dates.forEach(function(d){
		$("#options").append("<div>" + d.label + "</div>");
	});
}

function percentRemaining(){
	return ((Date.now() - startDate) / (currDate - startDate)) * 100;
}

function updatePercent(){
	$("#percentremaining").text(percentRemaining().toFixed(2) + "% until " + currStr);
	$("#filled").animate({
		width: percentRemaining() + "%",
	}, 1000, function(){
		// changes color after animation finishes
		if (percentRemaining() > 100.){
				$("#filled").css('background-color', 'green');
			} else {
			$("#filled").css('background-color', 'red');
		}
	});
}
