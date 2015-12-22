//background img
var background_img = new Image();
//mounster img
var monster_img = new Image();


window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var img = new Image();
    background_img.onload = function(){
        context.drawImage(background_img, 0, 0,500,600);
    };
    background_img.src = "backgroung.jpg";  
    main();
};

function main() {
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
	monster_img.onload = function(){
        context.drawImage(monster_img, 0, 0,50,50);
    };
	monster_img.src="monster.png";

	cancelAnimationFrame(run_requestAnimation);
	run_requestAnimation = requestAnimationFrame(main);
}
var run_requestAnimation;
var windows = window;
requestAnimationFrame = windows.requestAnimationFrame || windows.webkitRequestAnimationFrame || windows.msRequestAnimationFrame || windows.mozRequestAnimationFrame;

