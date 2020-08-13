import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Nabout = ({ data: { newAbout } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={newAbout.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{newAbout.title}</h1>
        <p className="sheet__lead">{newAbout.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={newAbout.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: newAbout.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Nabout

export const query = graphql`
  query newAbout {
    newAbout: datoCmsNewAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
