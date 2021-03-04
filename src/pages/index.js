import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/react'
import Articles from '../components/articles'

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div
        css={css`
          margin-top: 5vh;

          h1 {
            font-size: 4rem;
          }
        `}
      >
        <h1>{data.strapiHomepage.hero.title}</h1>
        <Articles articles={data.allStrapiArticle.edges} />
      </div>
    </Layout>
  )
}

export default IndexPage

const query = graphql`
  {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(height: 30, width: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
