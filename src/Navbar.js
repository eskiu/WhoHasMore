import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun, faHomeLg } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Navbar({ isDark, handleDarkMode }) {



    return (
        <>
            <nav className='navbar-container'>
                <Link to={`/`} className={isDark ? "dark-mode-text" : "light-mode-text"}><FontAwesomeIcon icon={faHomeLg} /></Link>
                <h1>WHO HAS MORE</h1>
                <div className="icon">
                    {isDark ? <FontAwesomeIcon icon={faSun} onClick={handleDarkMode} /> : <FontAwesomeIcon icon={faMoon} onClick={handleDarkMode} />}
                </div>
            </nav>
        </>
    )
}
export default Navbar