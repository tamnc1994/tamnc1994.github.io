//month select now
var mont_select_now=0;
//year select now
var year_select_now=0;
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

//function get month name
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

//function call draw calendar 
function setCalOnchange(){
    var year=parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    year_select_now=year;
    mont_select_now=month;
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
    var border = 1 ;
    var cellspacing = 3 ;
    var colWidth = 21 ;
    var dayCellHeight = 25 ;
    var dayColor = "darkblue";
    var todayColor = "red" ;
    var text = "" ;
    //set table clendar
    text += '<TABLE BORDER=' + border + ' CELLSPACING=' + cellspacing + '>' ;
    var openCol = '<TD>';
    openCol += '<FONT>';
    var closeCol = '</FONT></TD>';
    var weekDay = new Array(7);
    weekDay[0] = "Sun";
    weekDay[1] = "Mon";
    weekDay[2] = "Tue";
    weekDay[3] = "Wed";
    weekDay[4] = "Thu";
    weekDay[5] = "Fri";
    weekDay[6] = "Sat";
    text += '<TR>';
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
                    text += '<TD ></TD>';
                    curCell++;
                } 
                else
                {    
                    if (digit == date) 
                    { 
                        text += '<TD onclick="setDay('+digit+');" class="active" >';
                        text += digit;
                        text += '</TD>';
                        digit++;
                    } 
                    else
                    {
                        text += '<TD onclick="setDay('+digit+');" >' + digit + '</TD>';
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
function display_header_calendar(mont_selected, year_selected){
    document.getElementById("display_header_calendar").style.display= "block";
    document.getElementById("display_calendar").style.display= "block";
    //date now
    var now = new Date();
    //set calendar table
    var border = 1 ;
    var cellspacing = 3 ;
    var colWidth = 21 ;
    var dayCellHeight = 25 ;
    var dayColor = "darkblue";
    var todayColor = "red" ;
    var text = "" ;
    //set table clendar
    text += '<TABLE  CELLSPACING=' + cellspacing + '>' ;
    //create button left
    text += '<tr class="header_cal">';
    text+='<td><button  onclick="prevYear();" ><<</button></td>';
    text+='<td><button  onclick="prevMonth();" ><</button></td>';
    //create month
    //month now
    var month_now=now.getMonth();
    text+='<td colspan="2">';
    text+='<select id="month" onchange="setCalOnchange();" >';
    for(var month=0;month<12;month++)
    {
        if(mont_selected<0)
        {
            
            if(month==month_now)
            {
                text+='<option selected="selected" value="'+month+'">'+getMonthName(month)+'</option>';
                mont_select_now=month;
            }
            else
            {
                text+='<option  value="'+month+'">'+getMonthName(month)+'</option>';
            }
            //mont_select_now=month;
        }
        else{

            if(month==mont_select_now)
            {
                text+='<option selected="selected" value="'+month+'">'+getMonthName(month)+'</option>';
                mont_select_now=month;
            }
            else
            {
                text+='<option  value="'+month+'">'+getMonthName(month)+'</option>';
            }
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
        if(year_selected<0)
        {
            if(i==year_now)
            {
                text+='<option selected="selected" value="'+i+'">'+i+'</option>';
                year_select_now=i;
            }
            else
            {
                text+='<option value="'+i+'">'+i+'</option>';
            }
           }
           else{

            if(i==year_select_now)
            {
                text+='<option selected="selected" value="'+i+'">'+i+'</option>';
                year_select_now=i;
            }
            else
            {
                text+='<option value="'+i+'">'+i+'</option>';
            }
           } 
        
    }
    text+='</select>';
    text+='</td>';
    //create button right
    text+='<td><button onclick="nextMonth();" >></button></td>';
    text+='<td><button onclick="nextYear();"  >>></button></td>';
    text+='</tr>';
    text += '</TABLE>';
    document.getElementById("display_header_calendar").innerHTML= text;
    //draw calendar now
    setCalTimeNow();
}

//function next mont
function nextMonth(){
    mont_select_now++;
    if(mont_select_now>=12)
    {
        mont_select_now=0;
        year_select_now++;
    }
    display_header_calendar(1,1);
    //draw calendar event selected change
    setCalOnchange();
}

//function prev mont
function prevMonth(){
    mont_select_now--;
    if(mont_select_now<0)
    {
        mont_select_now=11;
        year_select_now--;
    }
    display_header_calendar(1,1);
    //draw calendar event selected change
    setCalOnchange();
}

//function next year
function nextYear(){
    //date now
    var now = new Date();
    //year now
    var year_now = now.getFullYear();
    year_select_now++;
    if(year_select_now>year_now+20)
    {
        year_select_now=1990;
    }
    display_header_calendar(1,1);
    //draw calendar event selected change
    setCalOnchange();
}

//function prev year
function prevYear(){
    //date now
    var now = new Date();
    //year now
    var year_now = now.getFullYear();
    year_select_now--;
    if(year_select_now<1990)
    {
        year_select_now=year_now+20;
    }
    display_header_calendar(1,1);
    //draw calendar event selected change
    setCalOnchange();
}

//function set day
function setDay(day_value){
    var year=parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value)+1;
    document.getElementById("value_calendar").value= day_value+'/'+month+'/'+year;
    document.getElementById("display_header_calendar").style.display= "none";
    document.getElementById("display_calendar").style.display= "none";
}