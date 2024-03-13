import { useContext } from 'react';
import AuthContext from './AuthContext';
import Welcome from './Welcome';

const Home = () => {
    const auth = useContext(AuthContext);
    const onLogout = () => {
        auth.LogoutHandler()
    }
    return (
        <>
            <Welcome />
            <button className=' bg-blue-600 rounded p-1 text-white' onClick={onLogout}>Logout</button>
        </>
    );
}

export default Home;