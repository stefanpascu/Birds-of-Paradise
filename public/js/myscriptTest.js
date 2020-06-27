var question001 = ["1. What is The Halmahera paradise-crow (Lycocorax pyrrhopterus) also known as? (3p)"];
var choices001 = ["<input onclick=correct001() name=button001 type=radio />The silky crow<br /><input onclick=incorrect001() name=button001 type=radio />The fluffy parrot<br /><input onclick=incorrect001() name=button001 type=radio />The grey crow<br />"];

var question002 = ["2. What is the maximum length a lesser bird-of-paradise can reach? (3p)"];
var choices002 = ["<input onclick=incorrect002() name=button002 type=radio />42 cm<br /><input onclick=correct002() name=button002 type=radio />32 cm<br /><input onclick=incorrect002() name=button002 type=radio />58 cm<br />"];

var question003 = ["3. Where is the majority of birds of paradise found? (3p)"];
var choices003 = ["<input onclick=incorrect003() name=button003 type=radio />New Guinea<br /><input onclick=incorrect003() name=button003 type=radio />Eastern Australia<br /><input onclick=correct003() name=button003 type=radio />Both New Guinea and eastern Australia<br />"];

var question004 = ["4. How many Generas of birds of paradise have been found until now? (3p)"];
var choices004 = ["<input onclick=incorrect004() name=button004 type=radio />13<br /><input onclick=incorrect004() name=button004 type=radio />14<br /><input onclick=correct004() name=button004 type=radio />15<br />"];

var question005 = ["5. How many species does the Seleucidis genera include? (3p)"];
var choices005 = ["<input onclick=correct005() name=button005 type=radio />1<br /><input onclick=incorrect005() name=button005 type=radio />3<br /><input onclick=incorrect005() name=button005 type=radio />5<br /><input onclick=incorrect005() name=button005 type=radio />14<br />"];

var question006 = ["6. In what kind of habitat does the Epimachus live? (3p)"];
var choices006 = ["<input onclick=incorrect006() name=button006 type=radio />Tundra<br /><input onclick=correct006() name=button006 type=radio />Highland forests<br /><input onclick=incorrect006() name=button006 type=radio />Grassland fields<br /><input onclick=incorrect006() name=button006 type=radio />Deserted wastelands<br />"];

var question007 = ["7. What kind of sound does the Magnificent Riflebird make to atract females? (3p)"];
var choices007 = ["<input onclick=incorrect007() name=button007 type=radio />Swish<br /><input onclick=incorrect007() name=button007 type=radio />Fwoop<br /><input onclick=incorrect007() name=button007 type=radio />Zwam<br /><input onclick=correct007() name=button007 type=radio />Woosh<br />"];

var question008 = ["8. Western Parotia's eye is usually blue, but what color does it take when it tries to seduce a female? (3p)"];
var choices008 = ["<input onclick=incorrect008() name=button008 type=radio />Green<br /><input onclick=correct008() name=button008 type=radio />Yellow<br /><input onclick=incorrect008() name=button008 type=radio />Red<br /><input onclick=incorrect008() name=button008 type=radio />Violet<br /><input onclick=incorrect008() name=button008 type=radio />Brown<br />"];

var question009 = ["9. How many plumes does the Parotia genera usually have on its head? (3p)"];
var choices009 = ["<input onclick=incorrect009() name=button009 type=radio />None<br /><input onclick=incorrect009() name=button009 type=radio />Ten<br /><input onclick=incorrect009() name=button009 type=radio />Four<br /><input onclick=incorrect009() name=button009 type=radio />Two<br /><input onclick=correct009() name=button009 type=radio />Six<br />"];

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var z;

window.onload = function () {
	let things = ['Good luck!', 'Do your best!', 'Ace it!'];
	let thing = things[Math.floor(Math.random() * things.length)];
	document.getElementById("Cuv01").innerHTML = thing;
	pageTimer();
	a = 0;
	message001.innerHTML = question001;
	options001.innerHTML = choices001;
	click001.innerHTML = "<button onclick=set002()>Submit Answer</button>";
	Timer();
}

function pageTimer() {
	var T;
	var f01;
	if (localStorage.getItem('TotalTime05') == 'NaN') {
		localStorage.setItem('TotalTime05', String('0'));
		f01 = 0;
	} else f01 = parseInt(localStorage.getItem('TotalTime05'));
	T = setInterval(function () {
		if (localStorage.getItem('TotalTime05') == 'NaN')
			f01 = 0;
		var txt01 = (f01 / 1000 / 60).toFixed(0);
		var txt02 = f01 / 1000;
		txt02 = txt02 % 60;
		txt02 = txt02.toFixed(0);
		if (txt02 < 30)
			document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01) + " minutes and " + String(txt02) + " seconds";
		else document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01 - 1) + " minutes and " + String(txt02) + " seconds";
		f01 = f01 + 1000;
		localStorage.setItem("TotalTime05", String(f01));
	}, 1000);
}

function correct001() {
	a = 3;
}

function incorrect001() {
	a = 0;
}

function set002() {
	b = 0;
	message001.innerHTML = question002;
	options001.innerHTML = choices002;
	click001.innerHTML = "<button onclick=set003()>Submit Answer</button>";
}

function correct002() {
	b = 3;
}

function incorrect002() {
	b = 0;
}

function set003() {
	c = 0;
	message001.innerHTML = question003;
	options001.innerHTML = choices003;
	click001.innerHTML = "<button onclick=set004()>Submit Answer</button>";
}

function correct003() {
	c = 3;
}

function incorrect003() {
	c = 0;
}


function set004() {
	d = 0;
	message001.innerHTML = question004;
	options001.innerHTML = choices004;
	click001.innerHTML = "<button onclick=set005()>Submit Answer</button>";
}

function correct004() {
	d = 3;
}

function incorrect004() {
	d = 0;
}

function set005() {
	e = 0;
	message001.innerHTML = question005;
	options001.innerHTML = choices005;
	click001.innerHTML = "<button onclick=set006()>Submit Answer</button>";
}

function correct005() {
	e = 4;
}

function incorrect005() {
	e = 0;
}

function set006() {
	f = 0;
	message001.innerHTML = question006;
	options001.innerHTML = choices006;
	click001.innerHTML = "<button onclick=set007()>Submit Answer</button>";
}

function correct006() {
	f = 4;
}

function incorrect006() {
	f = 0;
}

function set007() {
	g = 0;
	message001.innerHTML = question007;
	options001.innerHTML = choices007;
	click001.innerHTML = "<button onclick=set008()>Submit Answer</button>";
}

function correct007() {
	g = 4;
}

function incorrect007() {
	g = 0;
}

function set008() {
	h = 0;
	message001.innerHTML = question008;
	options001.innerHTML = choices008;
	click001.innerHTML = "<button onclick=set009()>Submit Answer</button>";
}

function correct008() {
	h = 5;
}

function incorrect008() {
	h = 0;
}

function set009() {
	i = 0;
	message001.innerHTML = question009;
	options001.innerHTML = choices009;
	click001.innerHTML = "<button onclick=result001()>Finish Quiz</button>";
}

function correct009() {
	i = 5;
}

function incorrect009() {
	i = 0;
}

function result001() {
	z = (((a + b + c + d + e + f + g + h + i) / 34) * 100).toFixed(0);
	if (z == 100)
		message001.innerHTML = "WOW, " + String(localStorage.getItem("Name")) + ", YOU GOT A PERFECT SCORE!";
	else if (z > 60)
		message001.innerHTML = "CONGRATULATIONS, " + String(localStorage.getItem("Name")) + "!";
	else message001.innerHTML = "BETTER LUCK NEXT TIME, " + String(localStorage.getItem("Name")) + "!";
	quizTime001.innerHTML = "Time spent taking the quiz: " + String(((300000 - dm) / 1000 / 60).toFixed(0)) + " minutes and " + String((((300000 - dm - 1000) / 1000) % 60).toFixed(0)) + " seconds";
	instruction001.innerHTML = "";
	options001.innerHTML = "";
	comment001.innerHTML = "Your score is: " + z + " %";
	click001.remove();
	clearInterval(time);
	//click001.innerHTML = "<button onclick=repeat001()>Repeat</button>";
}
/*
function repeat001() {
    location.reload();
}
*/
var time;
var ds = 270000;
var dm = 300000;
function Timer() {
	setTimeout(function () {
		dm = 60000;
		result001();
	}, 301000);
	time = setInterval(function () {
		var f1 = ds;
		var f2 = dm;
		var txt1 = (f1 / 1000 / 60).toFixed(0);
		var txt2 = f2 / 1000;
		txt2 = txt2 % 60;
		txt2 = txt2.toFixed(0);
		if (txt1 == 0 && txt2 < 30)
			document.getElementById("bruh69").innerHTML = txt1 + " : " + txt2 + "-";
		else document.getElementById("bruh69").innerHTML = txt1 + " : " + txt2;
		f1 = f1 - 1000;
		f2 = f2 - 1000;
		ds = f1;
		dm = f2;
	}, 1000);
}
