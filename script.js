
function loaded(){

	window.open("http://confsitonew.maxapp.eu/Agenti/", '_system');
	//document.getElementById("link").click();
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	document.getElementById("centra").style.marginTop= "100px";
	document.getElementById("centra").style.marginLeft= ((w/2)-100)+"px";
	setInterval(function () {
		document.getElementById("centra").style.display= "block";
		document.getElementById("intro").style.display= "none";
		document.getElementById("intro2").style.display= "none";
	}, 4000);
	
	

}

function apriApp(){
	//window.open("http://confsitonew.maxapp.eu/Agenti/", '_system');
	document.getElementById("link").click();
	window.close();
}