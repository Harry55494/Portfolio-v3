export function setIcons() {
	const theme = localStorage.getItem("color-theme");
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
	if (
		localStorage.getItem("color-theme") === "dark" ||
		(!("color-theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
		localStorage.setItem("color-theme", "dark");
	} else {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("color-theme", "light");
	}

	setIcons();
}

export function changeTheme() {
	if (localStorage.getItem("color-theme")) {
		if (localStorage.getItem("color-theme") === "light") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
		}

		// if NOT set via local storage previously
	} else {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
		}
	}

	setIcons();
}
