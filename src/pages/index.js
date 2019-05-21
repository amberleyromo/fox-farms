import React from "react"
import logo from "../assets/logo.png"
import { Link } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Link to="/contact">Contact</Link>
      <div
        style={{
          color: "black",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ height: 400, width: 400 }}
          src={logo}
          alt="fox-farm-logo"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 36,
        }}
      >
        <div>
          <p>Dog. Chicken. Sheep. </p>
        </div>
      </div>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          paddingRight: 100,
          paddingLeft: 100,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit
        urna quis sem congue, varius elementum sapien pellentesque. Phasellus
        laoreet iaculis ligula. Mauris porta at lorem non condimentum. Nam non
        accumsan lorem. Pellentesque aliquam, neque quis iaculis cursus, turpis
        dui condimentum sapien, id semper mauris urna vitae lectus. Aliquam
        consequat tortor quis convallis ullamcorper. Duis vitae mauris sed dui
        scelerisque pretium. Sed cursus nunc nec urna fringilla bibendum. Nullam
        id vestibulum nulla. Curabitur faucibus malesuada odio, vel viverra
        metus mollis a. Phasellus elementum neque a lacinia egestas. Donec vel
        dapibus libero, quis congue velit. Curabitur id sollicitudin orci.
        Vivamus at mauris rhoncus, luctus sapien vel, eleifend sem. Donec sit
        amet ligula vitae enim malesuada lacinia et ac velit. Pellentesque non
        tortor sed purus condimentum auctor ac at sapien. Integer sed augue vel
        metus commodo blandit. Nullam quam magna, laoreet vel nisl sit amet,
        vehicula feugiat dolor.
      </p>
      {/* <div>
        {data.instaNode.map(({ thumbnails }, index) => (
          <tr key={index}>
            <td>{thumbnails.src}</td>
          </tr>
        ))}
      </div> */}
    </div>
  )
}

export const query = graphql`
  query {
    instaNode {
      username
      thumbnails {
        src
        config_width
        config_height
      }
    }
  }
`
