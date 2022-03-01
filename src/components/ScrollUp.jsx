import React, {useEffect, useState} from 'react';
import '../css/scrollup.css';
import scrollTo from 'gatsby-plugin-smoothscroll';


const ScrollUp = () => {
    const [visb, setVisible] = useState(false);
    useEffect(()=>{ 
        window.onscroll = () =>{
            let y = window.scrollY;
            if(window.scrollY > 400){
                setVisible(true);
                setTimeout(()=>{
                    if(y === window.scrollY)setVisible(false);
                },2000);
            }else setVisible(false);
        }
    },[]);

    return(
        <div className={`Scll-up ${visb ? 'scll-visible':''}`}
            onClick={()=>scrollTo('#header-first-section')}
        >
            <i className="fas fa-arrow-up fa-2x"></i>
        </div>
    )
}

export default ScrollUp;