var y;
window.onload = function() {
  pageTimer();	

  y = document.createElement("TEXTAREA");
  var num1 =  localStorage.getItem('Name') || 'Replace text with name';
  var m = document.createTextNode(num1);
  y.setAttribute("id", "myTextarea");
  y.appendChild(m);
  document.getElementById("textArea1").appendChild(y);

  var x = document.createElement("SELECT");
  x.setAttribute("id", "mySelect");
  var gen1 = localStorage.getItem('Gender');
  x.setAttribute("selectedIndex", gen1);
  //document.getElementById("selGen").innerHTML = x;
  document.getElementById("selGen").appendChild(x);





	var timer;
	var v = document.createElement("INPUT");
	v.setAttribute("value", "00#00#0000");
	var w = document.createTextNode(v);
	var secondsinit = 0;
	var minutesinit = 0; 
	var hoursinit = 0; 
	v.appendChild(w);
	document.getElementById("birthDate").appendChild(v);

	document.getElementById("ageButton").addEventListener("click", setAge);
	function setAge(){
		clearInterval(timer);
		var daysinit = parseInt(v.value[0]+v.value[1]), monthsinit = parseInt(v.value[3]+v.value[4]), yearsinit = parseInt(v.value[6]+v.value[7]+v.value[8]+v.value[9]);
		timer = setInterval(function(){
		var now = new Date();
		var seconds = now.getSeconds();
		var minutes = now.getMinutes();
		var hours = now.getHours();
		var days = now.getUTCDate();
		var months = now.getUTCMonth() + 1; //months from 1-12
		var years = now.getUTCFullYear();
		if(months < monthsinit){
			if(days < daysinit){
				document.getElementById("age").innerHTML = String(years - yearsinit - 1) + " years " + String(12 - monthsinit - 1 + months) + " months " + String(30 - daysinit + 1 + days) + " days " + String(hours - hoursinit) + " hours " + String(minutes - minutesinit) + " minutes " + String(seconds - secondsinit) + " seconds ";
			} else {
				document.getElementById("age").innerHTML = String(years - yearsinit - 1) + " years " + String(12 - months + 1) + " months " + String(days - daysinit) + " days " + String(hours - hoursinit) + " hours " + String(minutes - minutesinit) + " minutes " + String(seconds - secondsinit) + " seconds ";
			}
		}else if(days < daysinit){
				document.getElementById("age").innerHTML = String(years - yearsinit) + " years " + String(months - monthsinit - 1) + " months " + String(30 - daysinit + 1 + days) + " days " + String(hours - hoursinit) + " hours " + String(minutes - minutesinit) + " minutes " + String(seconds - secondsinit) + " seconds ";
			} else {
				document.getElementById("age").innerHTML = String(years - yearsinit) + " years " + String(months - monthsinit) + " months " + String(days - daysinit) + " days " + String(hours - hoursinit) + " hours " + String(minutes - minutesinit) + " minutes " + String(seconds - secondsinit) + " seconds ";
			}
		}, 1000);
	}; 









  var z = document.createElement("option");
  z.setAttribute("value", "Male");
  var t = document.createTextNode("Male");
  z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
  
  z = document.createElement("option");
  z.setAttribute("value", "Female");
  t = document.createTextNode("Female");
  z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
  
  z = document.createElement("option");
  z.setAttribute("value", "Other");
  t = document.createTextNode("Other");
  z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
  document.getElementById( "mySelect").selectedIndex = localStorage.getItem("Gender"); 
}
function startTest() {
	var num = document.getElementById("myTextarea").value;
	localStorage.setItem("Name", num);
	var gen = document.getElementById("mySelect").selectedIndex;
	localStorage.setItem("Gender", gen);
	<!--localStorage.removeItem("Name");-->
	window.open("test", "_self");
}
function pageTimer() {
	var T;
	var f01;
	if(localStorage.getItem('TotalTime02') == 'NaN'){
		localStorage.setItem('TotalTime02', String('0'));
		f01 = 0;
	} else f01 = parseInt(localStorage.getItem('TotalTime02'));
	T = setInterval(function(){		
		if(localStorage.getItem('TotalTime02') == 'NaN')
			f01 = 0;
		var txt01 = (f01/1000/60).toFixed(0);	
		var txt02 = f01/1000;
		txt02 = txt02 % 60;
		txt02 = txt02.toFixed(0);
		if(txt02 < 30)
			document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01) + " minutes and " + String(txt02) + " seconds";
		else document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01 - 1) + " minutes and " + String(txt02) + " seconds";
		f01 = f01 + 1000;
		localStorage.setItem("TotalTime02", String(f01));		
	}, 1000);
}