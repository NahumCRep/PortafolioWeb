import React, {useState} from "react"
import {graphql} from 'gatsby';
import { useTranslation} from 'gatsby-plugin-react-i18next';
import {Header, About, Skills, Project, Contact, Footer, SocialMedia} from '../components';
import Layout from "../components/layout"

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const IndexPage = () => {
  const {t} = useTranslation();
  return(
    <Layout htitle={t("titles.pageOne")}>
      <Header />
      <SocialMedia />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage


