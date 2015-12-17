//test calander is exit
var isExitcalander=0;

//function get day in month
function getDays(month, year){
	var ar = new Array(12);
	ar[0] = 31;
	ar[1] = (leapYear(year)) ? 29 : 28 ;
	ar[2] = 31 ;
	ar[3] = 30 ;
	ar[4] = 31 ;
	ar[5] = 30 ;
	ar[6] = 31 ;
	ar[7] = 31 ;
	ar[8] = 30 ;
	ar[9] = 31 ;
	ar[10] = 30 ;
	ar[11] = 31 ;
	return ar[month];
}

function leapYear(year){
	if (year % 4 == 0) 
	{
		return true ;
	}
	return false;
}

function getMonthName(month){
	var ar = new Array(12);
	ar[0] = "January";
	ar[1] = "February";
	ar[2] = "March";
	ar[3] = "April";
	ar[4] = "May";
	ar[5] = "June";
	ar[6] = "July";
	ar[7] = "August";
	ar[8] = "September";
	ar[9] = "October";
	ar[10] = "November";
	ar[11] = "December";
	return ar[month];
}

function setCal(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var monthName = getMonthName(month);
	var date = now.getDate();
	var firstDay = now.getDay()+1;
	var days = getDays(month, year);
	drawCal(firstDay, days, date, monthName, year);
}

//function call draw calendar 
function setCalOnchange(){
    var year=parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var firstDayInstance = new Date(year,month,1);
    var date = firstDayInstance.getDate();
    var firstDay = firstDayInstance.getDay();
    var days = getDays(month, year);
    var monthName = getMonthName(month);
    drawCal(firstDay, days, date, monthName, year,days);
}


//function call draw calendar dislay time now
function setCalTimeNow(){
    var d=new Date();
	var month=d.getMonth();
	var year=d.getFullYear();
    var firstDayInstance = new Date(year,month,1);
    var date = firstDayInstance.getDate();
    var firstDay = firstDayInstance.getDay();
	var days = getDays(month, year);
	var monthName = getMonthName(month);
	drawCal(firstDay, days, date, monthName, year,days);
}


//function draw calendar 
function drawCal(firstDay, lastDate, date, monthName, year,days){
    //set calendar table
	var headerHeight = 10;
	var border = 1 ;
	var cellspacing = 3 ;
	var headerColor = "midnightblue" ;
	var headerSize = "+3" ;
	var colWidth = 21 ;
	var dayCellHeight = 25 ;
	var dayColor = "darkblue";
	var cellHeight = 35 ;
	var todayColor = "red" ;
	var text = "" ;

    //set table clendar
	text += '<TABLE BORDER=' + border + ' CELLSPACING=' + cellspacing + '>' ;
    var openCol = '<TD WIDTH=' + colWidth + ' HEIGHT=' + dayCellHeight + '>';
	openCol += '<FONT COLOR="' + dayColor + '">';
	var closeCol = '</FONT></TD>';
	var weekDay = new Array(7);
	weekDay[0] = "Sun";
	weekDay[1] = "Mon";
	weekDay[2] = "Tue";
	weekDay[3] = "Wed";
	weekDay[4] = "Thu";
	weekDay[5] = "Fri";
	weekDay[6] = "Sat";
	text += '<TR ALIGN="center" VALIGN="center">';
	for (var dayNum = 0; dayNum < 7; dayNum++)
	{
	    text += openCol + weekDay[dayNum] + closeCol ;
	}
	text += '</TR>';
    //draw calendar
	var digit = 1;
	var curCell = 0;
	for (var row = 0; row < Math.ceil((lastDate + firstDay - 1) / 7); row++)
	{
	    text += '<TR ALIGN="right" VALIGN="top">'
	    for (var col = 0; col < 7; col++) 
	    {
	        if (digit <=days && digit>0) 
			{ 
				if (curCell < firstDay) 
				{
					text += '<TD WIDTH="'+cellHeight+'"></TD>';
					curCell++;
				} 
				else
				{    
					if (digit == date) 
					{ 
						text += '<TD  HEIGHT=' + cellHeight + ' WIDTH="'+cellHeight+'" style="background-color:#03a9f4;text-align:center" >';
						text += digit;
						text += '</TD>';
						digit++;
					} 
					else
					{
						text += '<TD style="text-align:center"  WIDTH="'+cellHeight+'" HEIGHT=' + cellHeight + '>' + digit + '</TD>';
						digit++;
					}
			    }
			}
			else
			{
			    digit=0;
			}
		}
	text += '</TR>'
	}
	text += '</TABLE>';

	document.getElementById("display_calendar").innerHTML= text;
}

//function draw header calendar 
function display_header_calendar(){
    //date now
    var now = new Date();

    //set calendar table
	var headerHeight = 10;
	var border = 1 ;
	var cellspacing = 2 ;
	var headerColor = "#622a80" ;
	var headerSize = "+3" ;
	var colWidth = 19 ;
	var dayCellHeight = 25 ;
	var dayColor = "darkblue";
	var cellHeight = 20 ;
	var todayColor = "red" ;
	var text = "" ;

    //set table clendar
	text += '<TABLE BORDER=' + border + ' CELLSPACING=' + cellspacing + '>' ;

	//create button left
    text += '<tr style="background-color:#03a9f4">';
    text+='<td><button style="background-color:#03a9f4;" ><<</button></td>';
    text+='<td><button style="background-color:#03a9f4;" ><</button></td>';

    //create month

    //month now
    var month_now=now.getMonth()+1;

    text+='<td colspan="2">';
    text+='<select id="month" onchange="setCalOnchange();" >';

    for(var month=0;month<12;month++)
    {
    	if(month==month_now)
    	{
    		text+='<option value="'+month+'">'+getMonthName(month)+'</option>';
    	}
    	else
    	{
    		text+='<option selected="selected" value="'+month+'">'+getMonthName(month)+'</option>';
    	}
       
    }
    text+='</select>';
    text+='</td>';

    //year now
	var year_now = now.getFullYear();
    text+='<td>';
    text+='<select id="year" onchange="setCalOnchange();">';
    for(var i=1990;i<=year_now+20;i++)
    {
    	if(i==year_now)
    	{
    		text+='<option selected="selected" value="'+i+'">'+i+'</option>';
    	}
    	else
    	{
    		text+='<option value="'+i+'">'+i+'</option>';
    	}
        
    }
    text+='</select>';
    text+='</td>';

    //create button right
    text+='<td><button style="background-color:#03a9f4;" >></button></td>';
    text+='<td><button style="background-color:#03a9f4;" >>></button></td>';
    text+='</tr>';
	text += '</TABLE>';
	document.getElementById("display_header_calendar").innerHTML= text;

	//draw calendar now
	setCalTimeNow();
}