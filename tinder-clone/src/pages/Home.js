import React from 'react'
import Nav from '../components/Nav'

const authToken = false
const handleClick = () => {
    console.log("clicked")
}
function Home() {
    return (
        <>
        <Nav />
      <div className = "home">
          <h1>Swipe Right©</h1>
          <button className = "primary-button" onClick = {handleClick}>
              {authToken ? "Sign out" : "Create Account"}
          </button>
            </div>
    </>
  )
}

export default Home