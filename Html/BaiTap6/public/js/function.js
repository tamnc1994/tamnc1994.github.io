//function change event top down TOP 3 MOVIE REVIEWS
//x :1 <=> MOVIE1
//x :2 <=> MOVIE2
//x :3 <=> MOVIE3
function changeTopDown(movie){
	switch(movie)
	{
		case 1:
		    var image = document.getElementById('img1');
			if (image.src.match("top2")){
				document.getElementById("movie_1").style.display= "block";
				document.getElementById("img1").src="public/images/top.gif";
				document.getElementById("movie_2").style.display = "none";
				document.getElementById("img2").src="public/images/top2.gif";
				document.getElementById("movie_3").style.display = "none";
				document.getElementById("img3").src="public/images/top2.gif";
			} else{
				document.getElementById("movie_1").style.display= "none";
				document.getElementById("img1").src="public/images/top2.gif";
				document.getElementById("movie_2").style.display = "none";
				document.getElementById("img2").src="public/images/top2.gif";
				document.getElementById("movie_3").style.display = "none";
				document.getElementById("img3").src="public/images/top2.gif";
			}
			break;
		case 2:
		    var image = document.getElementById('img2');
			if (image.src.match("top2")) {
				document.getElementById("movie_2").style.display= "block";
				document.getElementById("img2").src="public/images/top.gif";
				document.getElementById("movie_1").style.display = "none";
				document.getElementById("img1").src="public/images/top2.gif";
				document.getElementById("movie_3").style.display = "none";
				document.getElementById("img3").src="public/images/top2.gif";
			} else {
				document.getElementById("movie_2").style.display= "none";
				document.getElementById("img2").src="public/images/top2.gif";
				document.getElementById("movie_1").style.display = "none";
				document.getElementById("img1").src="public/images/top2.gif";
				document.getElementById("movie_3").style.display = "none";
				document.getElementById("img3").src="public/images/top2.gif";
			}
			break;
		case 3:
		    var image = document.getElementById('img3');
			if (image.src.match("top2")) {
				document.getElementById("movie_3").style.display= "block";
				document.getElementById("img3").src="public/images/top.gif";
				document.getElementById("movie_2").style.display = "none";
				document.getElementById("img2").src="public/images/top2.gif";
				document.getElementById("movie_1").style.display = "none";
				document.getElementById("img1").src="public/images/top2.gif";
			}else {
				document.getElementById("movie_3").style.display= "none";
				document.getElementById("img3").src="public/images/top2.gif";
				document.getElementById("movie_2").style.display = "none";
				document.getElementById("img2").src="public/images/top2.gif";
				document.getElementById("movie_1").style.display = "none";
				document.getElementById("img1").src="public/images/top2.gif";
			}
			break;	
	}
}