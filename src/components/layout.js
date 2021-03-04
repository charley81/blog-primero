import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Seo from './seo'
import { Global, css } from '@emotion/react'
import globalStyles from '../styles/global-styles'
import Nav from '../components/nav'
import styled from '@emotion/styled'

const Wrap = styled.div`
  padding: 1rem;
  max-width: var(--maxWidth);
  margin: auto;
`

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              publicURL
            }
          }
        }
      }
    `}
    render={data => (
      <Wrap>
        <Global styles={globalStyles} />
        <Seo seo={seo} />
        <Nav />
        <main>{children}</main>
      </Wrap>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
