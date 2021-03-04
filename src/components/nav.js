import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/react'

const Nav = () => {
  const data = useStaticQuery(query)

  const {} = data

  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;

        ul {
          display: flex;
        }

        li {
          margin-left: 1rem;
        }
      `}
    >
      <h1>
        <Link to="/">{data.strapiGlobal.siteName}</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

const query = graphql`
  {
    strapiGlobal {
      siteName
    }
    allStrapiCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`
