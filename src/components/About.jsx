import React from 'react';
import '../css/about.css';
import photo from '../assets/images/me.png';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const About = () => {
    const {t} = useTranslation();
    return(
        <section id="section-about" className="about-container">
            <div id="observed-about" className="ab__content">
                <div className="ab__photo">
                    <img src={photo} alt="nahum"/>
                </div>
                <div className="ab__text">
                    <h1>{t("about.ab-title")}</h1>
                    <p>{t("about.ab-description")}</p>
                </div>
            </div>
        </section>
    )
}

export default About;