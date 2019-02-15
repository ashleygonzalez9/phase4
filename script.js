// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("rams-picture").classList.remove("rams-opaque");
	document.getElementById("pats-picture").classList.remove("pats-opaque");
	
	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
	
}

function showCloud(el){
	document.getElementById("new-cloud").src = ("image/cloud2.jpg");
	

} 

function showRainbow(el){
	document.getElementById("rain-bow").src = ("image/rainbow.jpg");
	

} 

