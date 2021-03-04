import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --darkColor: rgb(37, 37, 37);
    --medColor: rgb(115, 115, 115);
    --lightColor: rgb(255, 255, 255);
    --primaryColor: #cc2936;
    --borderRadius: 3px;
    --transition: all 0.3s linear;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Inconsolata', monospace;
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
  .center {
    text-align: center;
  }
  button {
    background: var(--primaryColor);
    color: var(--lightColor);
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  h1 {
    font-size: 3rem !important;
  }

  #category {
    font-weight: 500 !important;
  }

  #title {
    letter-spacing: 0.4px !important;
    font-size: 22px !important;
    font-size: 1.375rem !important;
    line-height: 1.13636 !important;
  }

  #banner {
    margin: 20px !important;
    height: 800px !important;
  }

  #editor {
    font-size: 16px !important;
    font-size: 1rem !important;
    line-height: 1.75 !important;
  }

  .uk-navbar-container {
    background: #fff !important;
  }

  img:hover {
    opacity: 1 !important;
    transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
  }
`

export default globalStyles
