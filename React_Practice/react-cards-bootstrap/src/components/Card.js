import React from "react"
import image1 from "../assets/image1.jpg"

function Card() {
  return (
    <div className="card">
      <img src={image1} alt="" />
      <div className="card-body">
        <h4 className="card-title">My Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
          cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>
    </div>
  )
}

export default Card
