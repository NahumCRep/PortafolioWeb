import React, {useState, useEffect} from 'react';
import '../css/socialmedia.css';

const SocialMedia = ({figure}) => {
    const [smedia, setSmedia] = useState(true);
    const [smbtn, setMbtn] = useState(false);
    useEffect(()=>{
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 400) {
                setMbtn(true);
                setSmedia(false);
            }
            else{
                setMbtn(false);
                setSmedia(true);
            }
          };
      
          window.addEventListener("scroll", handleScroll, { passive: true });
          return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return(
        <div className="socialm-container">
            <div role="button" tabIndex={0} className={`sm-arrow  ${smbtn ? 'sm-a-show':''}`}
                onClick={()=>setSmedia(!smedia)}
                onKeyDown={()=>setSmedia(!smedia)}
            >
                <i className={`fas ${smedia ? 'fa-chevron-right':'fa-chevron-left'}`}></i>
            </div>
            <div className="sm__list">
                <div className={`sm-item ${smedia ? 'sm-show':'sm-hidden'}`}>
                    <a href="https://twitter.com/NaohMun" aria-hidden="true" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>     
                </div>
                <div className={`sm-item  ${smedia ? 'sm-show':'sm-hidden'}`}>
                    <a href="https://www.instagram.com/nahumcasco/"  aria-hidden="true" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>     
                </div>
                <div className={`sm-item  ${smedia ? 'sm-show':'sm-hidden'}`}>
                    <a href="https://www.linkedin.com/in/nahum-casco/"  aria-hidden="true"  target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>     
                </div>
                <div className={`sm-item  ${smedia ? 'sm-show':'sm-hidden'}`}>
                    <a href="https://github.com/NeCvRep?tab=repositories"  aria-hidden="true" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>     
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;