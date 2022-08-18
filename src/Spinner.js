import React from 'react'
import './App.scss';

function Spinner({ isDark }) {

    return (
        <><div className="containerSpinner">
            <div className="sk-cube-grid">
                <div className={isDark ? "sk-cube sk-cube1 light-mode-elmnt" : "sk-cube sk-cube1 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube2 light-mode-elmnt" : "sk-cube sk-cube2 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube3 light-mode-elmnt" : "sk-cube sk-cube3 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube4 light-mode-elmnt" : "sk-cube sk-cube4 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube5 light-mode-elmnt" : "sk-cube sk-cube5 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube6 light-mode-elmnt" : "sk-cube sk-cube6 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube7 light-mode-elmnt" : "sk-cube sk-cube7 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube8 light-mode-elmnt" : "sk-cube sk-cube8 dark-mode-elmnt"}></div>
                <div className={isDark ? "sk-cube sk-cube9 light-mode-elmnt" : "sk-cube sk-cube9 dark-mode-elmnt"}></div>
            </div>
        </div>
        </>)
}

export default Spinner
