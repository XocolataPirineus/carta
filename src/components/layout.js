/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ marginTop: 30, textAlign: "center" }}>
          © Xocolata Pirineus {new Date().getFullYear()}
        </footer>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Acepto"
        buttonStyle={{
          background: "#2196f3",
          color: "white",
          borderRadius: "3px",
        }}
        style={{ background: "#212327", color: "#ecf0f1" }}
        expires={150}
      >
        <b>Te gustan las cookies?</b> 🍪 Nosotros utilizamos las cookies para
        asegurarnos tu mejor experiencia en nuesta web.{" "}
        <a
          href="https://cookiesandyou.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          Leer más...
        </a>
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
