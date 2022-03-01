import React from 'react';
import '../css/projectcard.css';
import {useTranslation} from 'gatsby-plugin-react-i18next';

const ProjectCard = (props) => {
    const {t} = useTranslation();
    return(
        <div className="Card-Container">
            <div className="Card-left-side"  style={{
            backgroundImage: `url(${props.bgI})`
            }}></div>
            <div className="Card-right-side">
                <div className="Card-Content">
                    <div className="Card-text">
                        <h3>{props.pcname}</h3>
                        <p>{props.pcdes}</p>
                    </div>
                    <div className="Card-tags">
                        <h5>{t("projects.pc-made")}</h5>
                        <div className="tag-list">
                            {props.pctec.map((tag)=>{
                                return(
                                    <div key={tag} className="tag-item">{tag}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="Card-buttons">
                    <a href={props.pcrep} target="_blank" rel="noreferrer">{t("projects.pc-bcode")}</a>
                    <a href={props.pclink} target="_blank" rel="noreferrer">{t("projects.pc-bapp")}<i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;