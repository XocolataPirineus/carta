import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as StarOutline } from '@fortawesome/free-regular-svg-icons'
import { faStar as StarSolid } from '@fortawesome/free-solid-svg-icons'

function currencyFormat(num) {
  return (
    num
      .toFixed(2) // always two decimal digits
      .replace('.', ',') // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Carta" />
    {data.allCartaXlsxHoja1.group.map(({ fieldValue, edges }) =>
      <div key={fieldValue}>
        <h3 style={{ marginTop: 1.45 + 'rem', marginBottom: 0.45 + 'rem', fontFamily: 'Didot', fontWeight: "bold" }}>{edges[0].node.titulo_esp} / {edges[0].node.titulo_cat}</h3>
        <hr style={{ borderTop: '1px solid black' }} />
        {edges.map(({ node }) => <Articulo data={node} key={node.id} />)}
      </div>
    )}
  </Layout>
)

class Articulo extends React.Component {

  constructor(props) {
    super(props);
    this.key = props.data.castellano + "|" + props.data.titulo_esp + "|isSaved";
    this.state = { data: props.data, isSaved: false };
  }

  componentDidMount() {
    this.setState({ isSaved: JSON.parse(window.localStorage.getItem(this.key)) })
  }

  onClick = () => {
    var isSaved = !this.state.isSaved;
    window.localStorage.setItem(this.key, JSON.stringify(isSaved));
    this.setState({ isSaved: isSaved })
  }

  onKeyDown = (event) => { if (event.keyCode === 13) { this.onClick() } }

  render() {
    return (
      <div>
        <div
          style={{ fontFamily: 'Helvetica', outline: "none" }}
          onClick={this.onClick}
          onKeyDown={this.onKeyDown}
          role="button"
          tabIndex={-1}
        >
          <FontAwesomeIcon
            icon={this.state.isSaved ? StarSolid : StarOutline}
            color={this.state.isSaved ? "auto" : "gray"}
            style={{ marginBottom: "1px" }}
            size="sm"
          />&nbsp;
        <strong>{this.state.data.castellano}{this.state.data.catalan ? " /" : ""}</strong> {this.state.data.catalan}
          <span> {currencyFormat(this.state.data.precio)}&nbsp;€</span>
        </div>
        {
          this.state.data.especificacion &&
          <div style={{ fontFamily: 'Helvetica', fontStyle: 'oblique', fontSize: 0.9 + 'em' }}>
            {this.state.data.especificacion}
          </div>
        }
      </div>
    );
  }
}

export const query = graphql`
{
  allCartaXlsxHoja1 {
    group(field: titulo_order) {
      fieldValue
      edges {
        node {
          id
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
