/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

function Card(props) {
  console.log(props)
  return (
    <div className="card text-center bg-dark">
      <img src="" alt="" />
      <div className="card-body text-light">
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
        <a href="#" className="btn btn-outline-secondary rounded-0">
          Go to this website
        </a>
      </div>
    </div>
  )
}

export default Card
