import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { useTranslation} from 'gatsby-plugin-react-i18next';

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

const SecondPage = () => {
  const {t}= useTranslation();
  return(
    <Layout htitle={t("titles.pageTwo")}>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
