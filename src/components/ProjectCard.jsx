import React from 'react';
import '../css/projectcard.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ProjectCard = (props) => {
    const { t } = useTranslation();
    return (
        <div className='card__container'>
            <div className='card__image_div' >
                <img src={props.bgI} alt={props.pcname} />
            </div>
            <div className='card__content'>
                <div className="card__text">
                    <h3>{props.pcname}</h3>
                    <p>{props.pcdes}</p>
                </div>
                <span className='card__divider'>_ _ _ _ _ _ _ _ _ _ _ _ _</span>
                <div className='card__tecnologies'>
                    {
                        props.pctec.map((tecnology, index) => {
                            return (
                                <span key={index}>{tecnology}</span>
                            )
                        })
                    }
                </div>
                <div className='card__buttons'>
                    <div className='card__button'>
                        <a href={props.pcrep} target="_blank" rel="noreferrer">{t("projects.pc-bcode")}</a>
                    </div>
                    <div className='card__button'>
                        <a href={props.pclink} target="_blank" rel="noreferrer">{t("projects.pc-bapp")}</a>
                    </div>
                </div>
            </div>
            <div className='card__gear top_gear'><i className="fa-solid fa-gear fa-5x"></i></div>
            <div className='card__gear middle_gear'><i className="fa-solid fa-gear fa-6x"></i></div>
            <div className='card__gear bot_gear'><i className="fa-solid fa-gear fa-4x"></i></div>
        </div>
    )
}

export default ProjectCard