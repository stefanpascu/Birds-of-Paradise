
window.onload = function() {
	myMove();
	pageTimer();
}


function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 400) {
	  pos = 0;	  
    } else if(pos <= 100){
			pos = pos + 1;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}else if(pos < 200){
				pos = pos + 1;
				elem.style.top = -pos+200 + 'px';
				elem.style.left = pos + 'px';
			}else if(pos <= 300){
					pos = pos + 1;
					elem.style.top = -pos+200 + 'px';
					elem.style.left = -pos+400 + 'px';
				}else if(pos < 400){
					pos = pos + 1;
					elem.style.top = pos-400 + 'px';
					elem.style.left = -pos+400 + 'px';
				}
			
  }
}



function pageTimer() {
	var T;
	var f01;
	if(localStorage.getItem('TotalTime01') == 'NaN'){
		localStorage.setItem('TotalTime01', String('0'));
		f01 = 0;
	} else f01 = parseInt(localStorage.getItem('TotalTime01'));
	T = setInterval(function(){		
		if(localStorage.getItem('TotalTime01') == 'NaN')
			f01 = 0;
		var txt01 = (f01/1000/60).toFixed(0);	
		var txt02 = f01/1000;
		txt02 = txt02 % 60;
		txt02 = txt02.toFixed(0);
		if(txt02 < 30)
			document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01) + " minutes and " + String(txt02) + " seconds";
		else document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01 - 1) + " minutes and " + String(txt02) + " seconds";
		f01 = f01 + 1000;
		localStorage.setItem("TotalTime01", String(f01));		
	}, 1000);
}