import logo from "../images/tinder_white.png"
import colorlogo from "../images/tinder_transparent.png"

import React from 'react'

function Nav({ minimal, setShowModal, showModal, setIsSignUp }) {
    const handleClick = () => {
      setShowModal(true)
      setIsSignUp(false)
    }
  const authToken = false

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