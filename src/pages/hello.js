import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const hello = ({ data: { helo } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={hello.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{hello.title}</h1>
        {hello.today_date}
        <div className="sheet__gallery">
        
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: hello.textContent,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default hello

export const query = graphql`
  query helloQuery {
    hello : datoCmsHello {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      seometa {
        title
      }

      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      textContentNode {
          childMarkdownRemark {
            html
          }
        }
    }
  }

`
