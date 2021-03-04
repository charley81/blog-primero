import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/react'

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
      </div>
    </Layout>
  )
}

export default IndexPage

const query = graphql`
  query MyQuery {
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
  }
`
