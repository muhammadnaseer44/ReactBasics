import { useState } from 'react'
import UserContext from './UserContext'
import Login from './Login'
import Home from './Home'

function User() {
  const [user, setUser] = useState(null)
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {user ? <Home /> : <Login />}
      </UserContext.Provider>
    </div>
  )
}

export default User;