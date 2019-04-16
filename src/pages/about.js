import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `black` }}>
    <Header headerText="About the Farm" />
    <p>blahh blah bla.</p>
    <Link to="/">Back to Home Page</Link>
  </div>
)
