import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --darkColor: rgb(37, 37, 37);
    --medColor: rgb(115, 115, 115);
    --lightColor: rgb(255, 255, 255);
    --primaryColor: #cc2936;
    --borderRadius: 3px;
    --transition: all 0.3s linear;
    --fontFamily: 'Heebo', sans-serif;
    --maxWidth: 800px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: var(--fontFamily);
    background: var(--lightColor);
    color: var(--medColor);
    font-size: 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--darkColor);
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--darkColor);
  }
`

export default globalStyles
