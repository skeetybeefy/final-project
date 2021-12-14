import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <p className="header-item"><Link to="/">Main page</Link></p>
            <p className="header-item"><Link to="/caught">Caught pokemon</Link></p>
        </header>
    )
}

export default Header