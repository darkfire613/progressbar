// Global vars
var startDate = new Date('June 11, 2019');
var endDate = new Date('November 1, 2019');

console.log("hello");


$(document).ready(function(){
	setInterval(updatePercent, 2000);
});

function percentRemaining(){
	return ((Date.now() - startDate) / (endDate - startDate)) * 100;
}

function updatePercent(){
	$(".percentremaining").text(percentRemaining().toFixed(2) + "%");
	$(".filled").width(percentRemaining() + "%");
}