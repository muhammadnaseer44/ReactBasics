import React, { useContext } from 'react'
import UserContext from './UserContext'
import Welcome from './Welcome'

function Profile() {
    const { user } = useContext(UserContext)
    return (
        <div>
            {user && <Welcome />}
        </div>
    )
}

export default Profile