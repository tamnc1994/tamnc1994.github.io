// JavaScript Document
function show(x)
{
	switch(x)
	{
		case 1:
		    document.getElementById("movie_1").style.display= "block";
            document.getElementById("img1").src="public/images/top.gif";
            document.getElementById("movie_2").style.display = "none";
            document.getElementById("img2").src="public/images/top2.gif";
            document.getElementById("movie_3").style.display = "none";
            document.getElementById("img3").src="public/images/top2.gif";
			break;
		case 2:
		    document.getElementById("movie_2").style.display= "block";
            document.getElementById("img2").src="public/images/top.gif";
            document.getElementById("movie_1").style.display = "none";
            document.getElementById("img1").src="public/images/top2.gif";
            document.getElementById("movie_3").style.display = "none";
            document.getElementById("img3").src="public/images/top2.gif";
			break;
		case 3:
		    document.getElementById("movie_3").style.display= "block";
            document.getElementById("img3").src="public/images/top.gif";
            document.getElementById("movie_1").style.display = "none";
            document.getElementById("img1").src="public/images/top2.gif";
            document.getElementById("movie_2").style.display = "none";
            document.getElementById("img2").src="public/images/top2.gif";
			break;
		
	}
}