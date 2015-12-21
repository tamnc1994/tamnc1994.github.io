//functions for ajax from##############################################################

//function reset from
function resetForm(){
	document.getElementById("form_ajax").reset();
	document.getElementById("error_user").innerHTML='<td class="error" id="error_user"></td>';
	document.getElementById("error_pass").innerHTML='<td class="error" id="error_pass"></td>';
	document.getElementById("error_email").innerHTML='<td class="error" id="error_email"></td>';
	document.getElementById("error_date").innerHTML='<td class="error" id="error_date"></td>';
	document.getElementById("display_header_calendar").style.display = "none";
	document.getElementById("display_calendar").style.display = "none";
}

//function check value input from
function checkValueForm(){
	document.getElementById("username").value="";
	document.getElementById("password").value = "";
	document.getElementById("email").value = "";
	document.getElementById("value_calendar").value = "";
	document.getElementById("display_header_calendar").style.display = "none";
	document.getElementById("display_calendar").style.display = "none";
}

//function check Email 
function validateEmail()
{
	var email=document.getElementById("email").value;
	if(email!=""){
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
	    if (reg.test(email)==true){
	    	document.getElementById("error_email").innerHTML = "";
	        return true; 
	    }
	    document.getElementById("error_email").innerHTML = "Your email isn't valid";
		return false;
	}
	else{
		document.getElementById("error_email").innerHTML = "Email isn't null";
		return false;
	}
} 

//function check username
function checkUsername(){
	var username=document.getElementById("username").value;
	if (username!=""){
		if(username.length>=5){
            document.getElementById("error_user").innerHTML = "";
            return true;
		}
		else{
			document.getElementById("error_user").innerHTML = "username length min 5 letter";
	        return false;
		}
	   
	}
	document.getElementById("error_user").innerHTML = "username isn't null";
	return false;
}

//function check Pass
function checkPass(){
	var pass=document.getElementById("password").value;
	if (pass!=""){
		if(pass.length>=10){
            document.getElementById("error_pass").innerHTML = "";
            return true;
		}
		else{
			document.getElementById("error_pass").innerHTML = "password length min 10 letter";
	        return false;
		}
	   
	}
	document.getElementById("error_pass").innerHTML = "password isn't null";
	return false;
}

//function check date
function checkDate(){
	var date=document.getElementById("value_calendar").value;
	if(date!=""){
        var reg = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	    if (reg.test(date)==true){
	    	document.getElementById("error_date").innerHTML = "";
	        return true; 
	    }
	    document.getElementById("error_date").innerHTML = "Birthday isn't valid";
		return false;
	}
	else{
		document.getElementById("error_date").innerHTML = "Birthday isn't null";
		return false;
	}
}

//function Submit Click
function submitClick(){
	var check=true;
	check=checkUsername();
	check=checkPass();
	check=validateEmail();
	check=checkDate();
	if(check==true){
		var url="http://192.168.1.69:100/GMO/tamnc1994.github.io/Javascript/formAjax/function_php.php";
		var username=document.getElementById("username").value;
        var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
				alert(xmlhttp.responseText);
			}
		};
		var data = "?user=" + username;
		url += data;
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}
}