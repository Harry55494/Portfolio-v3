export function setIcons() {
	// Correctly sets visibility of icons that change colour theme based on current theme
	const theme = localStorage.getItem("targetColourTheme");
	const isDark =
		theme === "dark" ||
		(!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

	if (isDark) {
		document.querySelectorAll("#moon_icon").forEach((el) => {
			el.classList.add("hidden");
		});
		document.querySelectorAll("#sun_icon").forEach((el) => {
			el.classList.remove("hidden");
		});
	} else {
		document.querySelectorAll("#moon_icon").forEach((el) => {
			el.classList.remove("hidden");
		});
		document.querySelectorAll("#sun_icon").forEach((el) => {
			el.classList.add("hidden");
		});
	}
}

export function initialSetTheme() {
	// Set the theme upon page load based on user preference or default
	if (
		localStorage.getItem("targetColourTheme") === "dark" ||
		(!("targetColourTheme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
		localStorage.setItem("targetColourTheme", "dark");
	} else {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("targetColourTheme", "light");
	}

	// Then call set icons to match
	setIcons();
}

export function changeTheme() {
	// Change theme and then set icons
	if (localStorage.getItem("targetColourTheme")) {
		if (localStorage.getItem("targetColourTheme") === "light") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("targetColourTheme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("targetColourTheme", "light");
		}

		// if NOT set via local storage previously
	} else {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("targetColourTheme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("targetColourTheme", "dark");
		}
	}

	setIcons();
}
