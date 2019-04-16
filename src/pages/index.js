import React from "react"
import logo from "../assets/logo.png"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `black` }}>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <img style={{ height: 400, width: 400 }} src={logo} alt="fox-farm-logo" />
    <h1>Fox Farms</h1>
    <p>Dog. Chicken. Sheep. </p>
  </div>
)
