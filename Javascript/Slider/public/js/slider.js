//functions for slider ##############################################################

var index =0;
var list_img = ["5.jpg", "6.jpg", "7.jpg", "4.png"];

//function create slider
function createSlider(){
    var text='';
    text+='<div class="slider">'
    text+='<img id="img" src="public/images/'+list_img[0]+'" alt="slider" title="slider" />';
    text+='</div>';
    text+='<div class="index_slider">';
    for(i=0;i<list_img.length;i++){
    	if(i==0)
    	{
            text+='<img onclick="selectImg('+i+')" id="index_'+i+'" src="public/images/index_active.png" alt="'+i+'" title="'+i+'" />';
    	}
    	else{
            text+='<img onclick="selectImg('+i+')" id="index_'+i+'" src="public/images/index.png" alt="'+i+'" title="'+i+'" />';
    	}
    }
    text+='<img onclick="prev()" src="public/images/back.png" alt="back" title="back" />';
    text+='<img onclick="next()"  src="public/images/next.png" alt="next" title="next" />';
    text+='</div>';
    //document.getElementById("slider").style.opacity = 0.3;
    document.getElementById("slider").innerHTML=text;
    //document.getElementById("slider").style.opacity = 1.3;
}

//function next slider
function next(){
    index++;
    if(index>list_img.length-1){
	index=0;
    }
    for(i=0;i<list_img.length;i++){
        document.getElementById("index_"+i).src = 'public/images/index.png';
    }
    document.getElementById("img").src = 'public/images/'+list_img[index];
    document.getElementById("index_"+index).src = 'public/images/index_active.png';
}

//function prev slider
function prev(){
     index--;
     if(index<0){
         index=list_img.length-1;
     }
     for(i=0;i<list_img.length;i++){
         document.getElementById("index_"+i).src = 'public/images/index.png';
     }
     document.getElementById("img").src = 'public/images/'+list_img[index];
     document.getElementById("index_"+index).src = 'public/images/index_active.png';
}

//function  slider random
function random(){
    for(i=0;i<list_img.length;i++){
        document.getElementById("index_"+index).src = 'public/images/index.png';
    }
    index++;
    if(index>list_img.length-1){
        index=0;
    }
    document.getElementById("img").src = 'public/images/'+list_img[index];
    document.getElementById("index_"+index).src = 'public/images/index_active.png';
}

//function select img slider
function selectImg(position){
    index=position;
    for(i=0;i<list_img.length;i++){
        document.getElementById("index_"+i).src = 'public/images/index.png';
    }
    document.getElementById("img").src = 'public/images/'+list_img[position];
    document.getElementById("index_"+position).src = 'public/images/index_active.png';
}

//timer 
setInterval(random, 5000);
