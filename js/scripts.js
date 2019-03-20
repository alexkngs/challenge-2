
var alien = document.getElementById("alien");
var tl1 = new TimelineMax({repeat:-1});

function wheee(){

tl1.to(alien, 6, {ease: Power2.linear, x: 1500});
}



/* Theme Change */
var counter = 0;

//document.getElementById("theme-change").onclick = theme();

function theme(){
	var textColor = ["green", "red", "blue"];


	document.getElementById('theme-change').style.color = textColor[counter];
	counter++;

	if (counter == 3){
		counter = 0;
	};
}


/* time - hours, minutes, seconds */
function displayTime() {
	var time = new Date();

    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

    setTimeout(displayTime,1000);

    h = zeroValue(h);
	m = zeroValue(m);
	s = zeroValue(s);

	function zeroValue(number){
	if (number < 10) {
		number = "0"+ number;
		
	}
	return number;
}
}

/* day of week */
function displayWeekDay() {

	var day;
	switch (new Date().getDay()) {
  case 0:
    day = "SUN";
    break;
  case 1:
    day = "MON";
    break;
  case 2:
     day = "TU";
    break;
  case 3:
    day = "WED";
    break;
  case 4:
    day = "THU";
    break;
  case 5:
    day = "FRI";
    break;
  case 6:
    day = "SAT";
}
    document.getElementById('day').innerHTML = day;
}

/* date */

function displayDate() {
	var date = new Date();
document.getElementById('date').innerHTML = date.getDate();

}





