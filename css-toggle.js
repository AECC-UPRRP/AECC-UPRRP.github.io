let cssLink = document.querySelector("link.css-link");
let logo = document.querySelector("#logo img");

let selectedTheme = localStorage.getItem("theme");
let selectedLogo = localStorage.getItem("logo");

// paths
let lightTheme = "css/theme-light.css";
let lightLogo = "assets/aecc-logo.png";
let darkTheme = "css/theme-catppuccin.css";
let darkLogo = "assets/catppuccin-logo.png";

// theme button toggle
function toggleCSS() {
	if (cssLink.getAttribute("href") == lightTheme) {
		localStorage.setItem("theme", darkTheme);
		cssLink.setAttribute("href", darkTheme);
		localStorage.setItem("logo", darkLogo);
		logo.src = darkLogo;
	} else {
		localStorage.setItem("theme", lightTheme);
		cssLink.setAttribute("href", lightTheme);
		localStorage.setItem("logo", lightLogo);
		logo.src = lightLogo;
	}
}

// loads CSS user selected
function loadCSS() {
	if (selectedTheme == null) {
		// sets theme to light by default
		localStorage.setItem("theme", lightTheme);
		localStorage.setItem("logo", lightLogo);
	} else {
		cssLink.setAttribute("href", selectedTheme);
		logo.src = selectedLogo;
	}
}
loadCSS();
