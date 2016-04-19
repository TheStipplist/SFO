

var playerChoice;
var computerChoice;

var playerDeclaraion = $(".declaration__player");
var computerDeclaration = $(".declaration__computer");
var winDeclaration = $(".declaration__winner"); 

var foxBox = $(".fox");
var ocelotBox = $(".ocelot");
var snakeBox = $(".snake");

var foxes;
var ocelot;
var snake;

var gameTime = $(".choose");
var backgroundMusic = $('.background__track');




$(".fox").on('click', function(event) {
	foxBox.addClass("outer__glow");
	playerChoice = 0;
	$(".declaration__player").html("FOXES");
	$(".snake").removeClass("outer__glow");
	$(".ocelot").removeClass("outer__glow");
});

$(".snake").on('click', function(event) {
	snakeBox.addClass("outer__glow");
	playerChoice = 1;
	$(".declaration__player").html("SNAKES");
	$(".fox").removeClass("outer__glow");
	$(".ocelot").removeClass("outer__glow");
});

$(".ocelot").on('click', function(event) {
	ocelotBox.addClass("outer__glow");
	playerChoice = 2;
	$(".declaration__player").html("OCELOTS");
	$(".snake").removeClass("outer__glow");
	$(".fox").removeClass("outer__glow");
});


$(".choose").on("click", function(event) {

	x=Math.random();
	x=x*3;
	x=Math.floor(x);
	if (x===0) {
		$(".declaration__computer").html("FOXES");
	}
	if (x===1) {
		$(".declaration__computer").html("SNAKES");
	}
	if (x===2) {
		$(".declaration__computer").html("OCELOTS");
	}
	if (x===0 && playerChoice===0) {
		$(".declaration__winner").html("WINNER: DRAW");
	} if (x===1 && playerChoice===1) {
		$(".declaration__winner").html("WINNER: DRAW");
	} if (x===2 && playerChoice===2) {
		$(".declaration__winner").html("WINNER: DRAW");
	}

	if (x===0 && playerChoice===1) {
		$(".declaration__winner").html("WINNER: FOXES");
	} if (x===1 && playerChoice===2) {
		$(".declaration__winner").html("WINNER: SNAKES");
	} if (x===2 && playerChoice===0) {
		$(".declaration__winner").html("WINNER: OCELOTS");
	}

	if (x===0 && playerChoice===2) {
		$(".declaration__winner").html("WINNER: OCELOTS");
	} if (x===1 && playerChoice===0) {
		$(".declaration__winner").html("WINNER: FOXES");
	} if (x===2 && playerChoice===1) {
		$(".declaration__winner").html("WINNER: SNAKES");
	}	

});

$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="ping.mp3";
        obj.volume=0.30;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".choose").click(function() {
            obj.play();
        });
 
    });


$(document).ready(function() {
        var obj1 = document.createElement("audio");
        obj1.src="gameOver.mp3";
        obj1.volume=1.0;
        obj1.autoPlay=false;
        obj1.preLoad=true;       
 
        $(".choose").click(function() {
            obj1.play();
        });
 
    });
