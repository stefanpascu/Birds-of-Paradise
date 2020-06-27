window.onload = function() {
  pageTimer();
}

function pageTimer() {
	var T;
	var f01;
	if(localStorage.getItem('TotalTime04') == 'NaN'){
		localStorage.setItem('TotalTime04', String('0'));
		f01 = 0;
	} else f01 = parseInt(localStorage.getItem('TotalTime04'));
	T = setInterval(function(){		
		if(localStorage.getItem('TotalTime04') == 'NaN')
			f01 = 0;
		var txt01 = (f01/1000/60).toFixed(0);	
		var txt02 = f01/1000;
		txt02 = txt02 % 60;
		txt02 = txt02.toFixed(0);
		if(txt02 < 30)
			document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01) + " minutes and " + String(txt02) + " seconds";
		else document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01 - 1) + " minutes and " + String(txt02) + " seconds";
		f01 = f01 + 1000;
		localStorage.setItem("TotalTime04", String(f01));		
	}, 1000);
}

document.getElementById("demo").innerHTML = "+40724 875 098";
document.getElementById("demo").style.fontSize = "larger";

document.getElementById("demo1").innerHTML = "BoPcontact@yahoo.com";
document.getElementById("demo1").style.fontSize = "larger";

document.getElementById("demo2").innerHTML = "Str. Abraham, Nr. 101, Bucharest, Romania";
document.getElementById("demo2").style.fontSize = "larger";

function reverse(){
    let v = document.getElementById("L01").innerHTML;
    document.getElementById("L02").value = document.getElementById("L01").innerHTML;
    document.getElementById("L01").innerHTML = document.getElementById("L03").innerHTML;
	document.getElementById("L03").innerHTML = v;
}