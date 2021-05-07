import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';

import LangDropdown from '../lang-dropdown/lang-dropdown';

function Header() {
    return (
        <header className="header">
            <LangDropdown />
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img
                                src={logo}
                                className="logo"
                                alt="Website logo."
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/collab">Collab</Link>
                    </li>
                    <li>
                        <Link to="/timeline">Timeline</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
