import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Mypage = ({ data: { myPage } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={myPage.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{myPage.title}</h1>
        <p className="sheet__lead">{myPage.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={myPage.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: myPage.contentNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Mypage

export const query = graphql`
  query myPage {
    myPage : datoCmsMyPage {
        seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        id
        contentNode {
            childMarkdownRemark {
            html
            }
        }
        subtitle
        title
        photo {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
            }
        }
    }
  }
`
