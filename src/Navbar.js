import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Navbar({ isDark, handleDarkMode }) {



    return (
        <>
            <nav className='navbar-container'>
                <Link to={`/`}><button className={isDark ? "dark-mode-text" : "light-mode-text"}>HOME</button></Link>
                <div className="icon">
                    {isDark ? <FontAwesomeIcon icon={faSun} onClick={handleDarkMode} /> : <FontAwesomeIcon icon={faMoon} onClick={handleDarkMode} />}
                </div>
            </nav>
        </>
    )
}
export default Navbar