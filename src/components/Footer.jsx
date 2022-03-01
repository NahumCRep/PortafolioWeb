import React from 'react';
import '../css/footer.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {Link} from 'gatsby';
import logosvg from '../assets/icons/logowhite.svg';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer id="section-footer" className="footer-container">
            <img src={logosvg} alt="logo" />
            <div className="ft__menu">
                <Link to="/">{t('nav.home')}</Link>
                <Link to="/page-2/">{t('nav.projects')}</Link>
            </div>
            <div className="ft__s-media">
                    <a href="https://twitter.com/NaohMun" target="-blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="https://www.instagram.com/nahumcasco/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/nahum-casco-b8350b21a/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    <a href="https://github.com/NeCvRep?tab=repositories" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
            </div>
            <label>2021 &copy; {t('footer.copy')} Nahum Casco</label>
        </footer>
    )
}

export default Footer;