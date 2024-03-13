import React, { useContext } from 'react'
import UserContext from './UserContext'

function Welcome() {
  const { user } = useContext(UserContext)
  return (
    <>
      <div> Welcome {user.username}</div>
    </>
  )
}

export default Welcome