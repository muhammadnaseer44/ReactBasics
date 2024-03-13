import { useContext } from 'react'
import AuthContext from './AuthContext'

function Welcome() {
    const auth = useContext(AuthContext)
    return (
        <div>
            {!auth.isLoggedIn && <h1>Welcome</h1>}
        </div>
    )
}

export default Welcome