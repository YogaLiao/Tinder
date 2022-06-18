import React, { useState } from 'react'
import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)

    const authToken = false
    const handleClick = () => {
        console.log("clicked")
      setShowModal(true)
      setIsSignUp(true)
    }
    return (
    <div className = "overlay">
        <Nav
          minimal={false}
          authToken={authToken}
          setShowModal={setShowModal}
          showModal={showModal}
          setIsSignUp = {setIsSignUp}
        />
      <div className = "home">
          <h1>Swipe Right©</h1>
          <button className = "primary-button" onClick = {handleClick}>
              {authToken ? "Sign out" : "Create Account"}
                </button>
          {showModal && <AuthModal
            setShowModal={setShowModal}
            isSignUp = {isSignUp}
          />}
    </div>
    </div>
  )
}

export default Home