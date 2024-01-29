import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    // Obtenir l'année courante
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-about">
                    <h3>A Propos de Moi</h3>
                    <p>
                        Directeur artistique et graphiste passionne avec plus de
                        10 ans d'experience dans la creation visuelle.
                        Specialise dans le design digital, l'identite de marque,
                        et l'illustration.
                    </p>
                </div>

                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li>Design Graphique</li>
                        <li>Branding & Identite Visuelle</li>
                        <li>Illustration & Art Direction</li>
                        <li>Design d'Interface Utilisateur</li>
                        <li>Conception de Site Web</li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contactez-Moi</h3>
                    <p>
                        Disponible pour des projets freelance et des
                        collaborations creatives.
                    </p>
                    <a href="mailto:da.quentin.savigny@gmail.com">
                        da.quentin.savigny@gmail.com
                    </a>
                    <p>
                        <a href="tel:+33671638306">Tel: +33 6 71 63 83 06</a>
                    </p>
                </div>

                <div className="footer-social">
                    <h3>Réseaux Sociaux</h3>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/savigny-quentin/">
                                <img src="/img/linkedin.png" alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/quentinsavigny1">
                                <img src="/img/Behance.png" alt="Behance" />
                            </a>
                        </li>
                        <li>
                            <a href="https://dribbble.com/yourprofile">
                                <img src="/img/dribble.png" alt="Dribbble" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/quentin_battlefit/?hl=fr">
                                <img src="/img/instagram.png" alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} Quentin SAVIGNY. Tous droits reserves.</p>
                <p>Design et developpe par Quentin SAVIGNY.</p>
            </div>
        </footer>
    );
};

export default Footer;
