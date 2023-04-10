import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    }}
  >
    <StaticImage
      src="../images/logo.png"
      alt={siteTitle}
      width={200}
      placeholder="blurred"
    />
  </header>
)

export default Header
