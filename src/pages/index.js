import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

function currencyFormat(num) {
  return (
    num
      .toFixed(2) // always two decimal digits
      .replace('.', ',') // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' €'
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Carta" />
    {data.allCartaXlsxHoja1.group.map(({ _, edges }) =>
      <>
        <h3 style={{ marginTop: 1.45 + 'rem', marginBottom: 0.45 + 'rem', fontFamily: 'Didot', fontWeight: "bold" }}>{edges[0].node.titulo_esp} / {edges[0].node.titulo_cat}</h3>
        <hr style={{ borderTop: '1px solid black' }} />
        {edges.map(({ node }) => (<Articulo data={node} />))}
      </>
    )}
  </Layout>
)

const Articulo = ({ data }) => (
  <div>
    <div style={{ fontFamily: 'Helvetica' }}>
      <strong>{data.castellano}{data.catalan ? " /" : ""}</strong> {data.catalan}
      <span> {currencyFormat(data.precio)}</span>
    </div>
    {data.especificacion &&
      <div style={{ fontFamily: 'Helvetica', fontStyle: 'oblique', fontSize: 0.9 + 'em' }}>
        {data.especificacion}
      </div>
    }
  </div>
)

export const query = graphql`
{
  allCartaXlsxHoja1 {
    group(field: titulo_order) {
      fieldValue
      edges {
        node {
          castellano
          catalan
          especificacion
          precio
          titulo_esp
          titulo_cat
        }
      }
    }
  }
}
`

export default IndexPage
