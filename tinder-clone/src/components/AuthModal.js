import React from 'react'

function AuthModal({setShowModal}) {
    const handleClick = () => {
    setShowModal(false)
}
  return (
      <div className = "auth-modal">
          <div onClick={handleClick}>ⓧ</div>
          AUTH MODEL
    </div>
  )
}

export default AuthModal