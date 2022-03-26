import React, { useEffect, useState } from "react";
import themeSwitchSunIcon from "../assets/header/theme-switch-sun.png";
import themeSwitchMoonIcon from "../assets/header/theme-switch-moon.png";
import "./ThemeSwitch.css";
import { setTheme } from "../utils/themes";

function ThemeSwitch() {
	// false = dark mode because of the way I wrote the CSS
	const [active, setActive] = useState(false);
	// the opposite, for screen readers
	const [ariaActive, setAriaActive] = useState(true);
	let theme = localStorage.getItem("theme");

	const changeThemeAndToggle = () => {
		if (localStorage.getItem("theme") === "theme-dark") {
			setTheme("theme-light");
			setActive(true);
			setAriaActive(false);
		} else {
			setTheme("theme-dark");
			setActive(false);
			setAriaActive(true);
		}
	};

	const handleOnClick = () => {
		changeThemeAndToggle();
	};

	const handleKeypress = (e) => {
		changeThemeAndToggle();
	};

	useEffect(() => {
		if (localStorage.getItem("theme") === "theme-dark") {
			setActive(false);
			setAriaActive(true);
		} else if (localStorage.getItem("theme") === "theme-light") {
			setActive(true);
			setAriaActive(false);
		}
	}, [theme]);

	return (
		<>
			<input
				aria-label="dark mode toggle"
				role="switch"
				aria-checked={ariaActive}
				onKeyPress={handleKeypress}
				type="checkbox"
				id="toggle"
				className="toggle--checkbox"
				onClick={handleOnClick}
				checked={active}
				readOnly
			/>
			<label htmlFor="toggle" className="toggle--label">
				<div className="themeSwitchContainer">
					{!active && (
						<img src={themeSwitchSunIcon} alt="theme-switch" />
					)}
					{active && (
						<img src={themeSwitchMoonIcon} alt="theme-switch" />
					)}
				</div>
			</label>
		</>
	);
}

export default ThemeSwitch;

/*
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="theme-switch" />
        </div>
      </div>*/
