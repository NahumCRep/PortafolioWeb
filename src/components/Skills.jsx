import React from 'react';
import '../css/skills.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import boy from '../assets/svg/boypc.svg';
const Skills = () => {
    const { t } = useTranslation();

    const skillsData = useStaticQuery(graphql`
    query MyQuery {
        allSkillsJson {
          edges {
            node {
              id
              name
              icon
            }
          }
        }
      }`);

    return (
        <section id="section-skills" className="skill-container">
            <h1>{t("skills.sk-title")}</h1>

            <div id="observed-skills" className="sk-wrapper">
                {
                    skillsData.allSkillsJson.edges.map((skill) => {
                        return (
                            <div key={skill.node.id} className="cdlist__item">
                                <div>
                                    <img src={skill.node.icon} alt={skill.node.name} />
                                </div>
                                <span>{skill.node.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="svg-container">
                <img className="svg_boy" src={boy} alt="svg boy" />
                <div className="dialog-container">
                    <div className="dialog-box">
                        <p>{t('skills.sk-svg')}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills;