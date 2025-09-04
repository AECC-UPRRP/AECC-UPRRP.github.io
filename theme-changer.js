let cssLink = document.querySelector("link.css-link");
let logo = document.querySelector("#logo img");

console.log(cssLink.getAttribute("href"));

let selectedTheme = localStorage.getItem("theme");
let selectedLogo = localStorage.getItem("logo");

let lightTheme = "theme-oficial.css";
let lightLogo = "assets/aecc-logo.png";
let darkTheme = "theme-catppuccin.css";
let darkLogo = "assets/catppuccin.png";

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

function loadCSS() {
	if (selectedTheme == null) {
		localStorage.setItem("theme", lightTheme);
		localStorage.setItem("logo", lightLogo);
	} else {
		cssLink.setAttribute("href", selectedTheme);
		logo.src = selectedLogo;
	}
}

loadCSS();
