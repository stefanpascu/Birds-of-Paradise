let i = 0;
pageTimer();
typeWriter();

function typeWriter() {
	let txt = 'Some of the sdrib tseddo';
	let speed = 100;
	if (i < 12) {
		document.getElementById("Title01").innerHTML = document.getElementById("Title01").innerHTML + txt[i];
		document.getElementById("Title02").innerHTML = document.getElementById("Title02").innerHTML + txt[23 - i];
		i++;
		setTimeout(typeWriter, speed);
	}
}

function pageTimer() {
	var T;
	var f01;
	if (localStorage.getItem('TotalTime07') == 'NaN') {
		localStorage.setItem('TotalTime07', String('0'));
		f01 = 0;
	} else f01 = parseInt(localStorage.getItem('TotalTime07'));
	T = setInterval(function () {
		if (localStorage.getItem('TotalTime07') == 'NaN')
			f01 = 0;
		var txt01 = (f01 / 1000 / 60).toFixed(0);
		var txt02 = f01 / 1000;
		txt02 = txt02 % 60;
		txt02 = txt02.toFixed(0);
		if (txt02 < 30)
			document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01) + " minutes and " + String(txt02) + " seconds";
		else document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01 - 1) + " minutes and " + String(txt02) + " seconds";
		f01 = f01 + 1000;
		localStorage.setItem("TotalTime07", String(f01));
	}, 1000);
}