import { Link } from 'react-router-dom'
import Darkmode from './Darkmode'
import Home from './assets/Home'

function Navbar() {



    return (
        <>
            <nav className='navbar-container'>
                <Link to={`/`} ><Home /></Link>
                <h1>WHO HAS MORE</h1>
                <div className="icon">
                    <Darkmode />
                </div>
            </nav>
        </>
    )
}
export default Navbar