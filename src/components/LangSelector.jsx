import React, { useState } from 'react';
import '../css/langselector.css';
import flgEs from "../assets/icons/espana.png";
import flgEn from "../assets/icons/eeuu.png";

const LangSelector = ({setLang, actualLang}) => {
    const [fopen, setFopen] = useState(false);
    return(
        <div className="lang-selector-container">
            <div className={`lang__flag ${fopen ? 'open-flags':''}`}>
                <img className="main-flag" src={actualLang === "es"? flgEs:flgEn} alt="flag" 
                    onClick={()=>setFopen(!fopen)}
                />
                <img className="flag-es" src={flgEs} alt="flag es" 
                    onClick={(e)=>setLang(e,'es')}
                />
                <img className="flag-en" src={flgEn} alt="flag en" 
                    onClick={(e)=>setLang(e,'en')}
                />
            </div>
        </div>
    )
}

export default LangSelector;
