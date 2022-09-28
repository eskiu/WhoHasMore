import React from "react"
import { useState } from "react"
import Moon from "./assets/Moon";
import Sun from "./assets/Sun";


function Darkmode() {

    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === null ? true : localStorage.getItem("theme") === "dark" ? true : false);

    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(darkTheme);
    }

    const switchTheme = () => {
        if (theme === lightTheme) {
            body.classList.replace(lightTheme, darkTheme);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
            setDarkMode(true);
        } else {
            body.classList.replace(darkTheme, lightTheme);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
            setDarkMode(false);
        }
    }

    return (
        <div className="darkMode-toggle" onClick={() => switchTheme()}>
            {darkMode ? <Sun /> : <Moon />}
        </div>
    )
}
export default Darkmode
