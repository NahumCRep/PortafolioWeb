import React, { useState, useEffect } from 'react';
import "../css/navbar.css";
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import scrollTo from 'gatsby-plugin-smoothscroll';
// import logo from '/icons/logowhite.svg';
import LangSelector from './LangSelector';
import useObserver from '../hooks/useObserver';


const Navbar = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useI18next();
  const [navFocus, setNavfocus] = useState('header');
  const [menu, setOpenMenu] = useState(false);

  const setALang = (e, lng) => {
    e.preventDefault();
    changeLanguage(lng);
  }

  const [observer, setElements, entries] = useObserver({
    root: null,
    rootMargin: '0px',  
    threshold: 0.80
  });

  useEffect(()=>{
    const sections = document.querySelectorAll('[id^=observed]');
    setElements(sections);
  },[setElements]);

  useEffect(()=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        // console.log(entry.target.id);
        if(entry.target.id === 'observed-header')setNavfocus('header')
        else if(entry.target.id === 'observed-about')setNavfocus('about')
        else if(entry.target.id === 'observed-skills')setNavfocus('skills')
        else if(entry.target.id === 'observed-projects')setNavfocus('projects')
        else if(entry.target.id === 'observed-contact')setNavfocus('contact')
        else setNavfocus('')
      }   
    })  
  },[entries,observer]);

  return (
    <div className="nav-div-container">
      <div className="nav-logo">
        <img src="/icons/logowhite.svg" alt="logo" />
      </div>
      <nav className={`nav-container  ${menu ? 'm-open' : ''}`}>
        <LangSelector setLang={setALang} actualLang={language} />
        <ul className="nav-links">
          <li
            className={navFocus === 'header' ? 'nav-focus':''} 
            onClick={() => {
              setOpenMenu(false);
              scrollTo('#section-header');
            }
          }>{t("nav.home")}</li>
          <li
            className={navFocus === 'about' ? 'nav-focus':''}  
            onClick={() => {
              setOpenMenu(false);
              scrollTo('#section-about');
            }
          }>{t("nav.about")}</li>
          <li
            className={navFocus === 'skills' ? 'nav-focus':''}  
            onClick={() => {
              setOpenMenu(false);
              scrollTo('#section-skills')
            }
          }>{t("nav.skills")}</li>
          <li
            className={navFocus === 'projects' ? 'nav-focus':''} 
            onClick={() => {
              setOpenMenu(false);
              scrollTo('#section-project');
            }}
          >{t("nav.projects")}</li>
        </ul>
      </nav>
      <div className="nav-bars">
        <i
          className={menu ? "fas fa-times fa-3x" : "fas fa-bars fa-3x"}
          onClick={() => setOpenMenu(!menu)}
        ></i>
      </div>
    </div>
  )
}

export default Navbar;