import React from "react"
import { useState } from "react"
import Moon from "./assets/Moon";
import Sun from "./assets/Sun";


function Darkmode() {

    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

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
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === lightTheme) {
            body.classList.replace(lightTheme, darkTheme);
            e.target.checked = true;
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        } else {
            body.classList.replace(darkTheme, lightTheme);
            e.target.checked = false;
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }
    }

    return (
        <div className="darkMode-toggle" onClick={(e) => switchTheme(e)}>
            {darkMode ? <Sun /> : <Moon />}
        </div>
    )
}
export default Darkmode
