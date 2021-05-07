import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { useTranslation } from 'react-i18next';
import './header.css';

import LangDropdown from '../lang-dropdown/lang-dropdown';

function Header() {
    const { t } = useTranslation(['header']);

    return (
        <header className="header">
            <LangDropdown />
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">{t('navbar.home')}</Link>
                    </li>
                    <li>
                        <Link to="/about">{t('navbar.about')}</Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img
                                src={logo}
                                className="logo"
                                alt={t('navbar.logoAlt')}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/collab">{t('navbar.collab')}</Link>
                    </li>
                    <li>
                        <Link to="/timeline">{t('navbar.timeline')}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
