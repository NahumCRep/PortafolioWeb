import React from 'react';
import '../css/project.css';
import {useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectCard from './ProjectCard';


const Project = () => {
    const {t} = useTranslation();
    const {language} = useI18next();

    const data  =  useStaticQuery(graphql`
    query ProjectsQuery {
        allProjectslistJson(filter: {popular: {eq: true}}, limit: 6) {
          edges {
            node {
              id
              name
              description_es
              description_en
              tecnologies
              repository
              link
              img
            }
          }
        }
      }`);


    return(
        <section id="section-project" className="project-container">
            <h1 className="pj-sec-h1">{t("projects.pj-title")}</h1>
            <div id="observed-projects" className="pj-content" >
              {
                data.allProjectslistJson.edges.map((edge)=>{
                  return(
                    <ProjectCard
                      key={edge.node.id}
                      pcname={edge.node.name}
                      pcdes={language === 'es' ? edge.node.description_es:edge.node.description_en}
                      pctec={edge.node.tecnologies}
                      pcrep={edge.node.repository}
                      pclink={edge.node.link} 
                      bgI={edge.node.img} 
                    />
                  )
                })
              }
            </div>
        </section>
    )
}

export default Project;