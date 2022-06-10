import logo from "../images/tinder_white.png"
import colorlogo from "../images/tinder_transparent.png"

import React from 'react'

function Nav({ minimal, authToken, setShowModal, showModal }) {
    const handleClick = () => {
        setShowModal(true)
    }
    return (
      <nav>
      <div className="logo-container">
          <img className = "logo" src = {minimal ? colorlogo :logo}/>
            </div>
            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled = {showModal}>Login</button>}
        
        </nav>
  )
}

export default Nav