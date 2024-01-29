import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';

const Header = () => {
    const navigate = useNavigate();

    // Fonction pour rediriger vers la page d'accueil
    const navigateHome = () => {
        navigate('/');
    };

    return (
        <header className="header">
            <div className="header-brand" onClick={navigateHome}>
                <img
                    src="/img/quentinSynthWave.png"
                    alt="Logo"
                    className="header-logo"
                />
            </div>

            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/" data-text="Accueil">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" data-text="À Propos">
                            À Propos
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" data-text="Portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" data-text="Blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" data-text="Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
