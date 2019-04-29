export function toggleDropDown(){
	console.log("yo");
	var x = document.getElementById("app-header");
	if (x.className === "app-header") {
		x.className += " responsive";
	} else {
		x.className = "app-header";
	}
}