import React from "react";
import '../css/header.css';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = ({ siteTitle }) => {
  const {t} = useTranslation();
  const {language} = useI18next();
  return (
    <header id="section-header" className="header-container">
        <div id="observed-header" className="header__content">
            <div className="hc__firtsline">
                <div className="line-orange"></div>
                <h3>{t("header.header-hi")}</h3>
            </div>
            <div className="hc__secondline">
                <h1>{t("header.header-bname")}</h1>
                <h1>Nahum Casco</h1>
            </div>
            <div className="hc__thirdline">
              {language === "es" ?
                <h3>{t("header.header-job")} <span>Front End</span></h3>
                :
                <h3><span>Front End</span> {t("header.header-job")}</h3>
              }
            </div>
            <div className="hc__buttons">
                {/* <button>CV</button> */}
                <button
                  onClick={()=>scrollTo('#section-contact')}
                >{t("header.header-buttom")}</button>
            </div>
        </div>
    </header>
  )
}

export default Header;
