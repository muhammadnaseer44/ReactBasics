import { useState } from 'react';
import AuthContext from './AuthContext';
import Login from './Login';
import Home from './Home';

function Auth() {

    const isStore = localStorage.getItem("isLoggedIn") === "1"
    const [isLoggedIn, setIsLoggedIn] = useState(isStore);

    const LoginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }

    const LogoutHandler = () => {
        localStorage.setItem("isLoggedIn", "0");
        setIsLoggedIn(false);
    }

    return (
        <div className="text-center m-4">
            <AuthContext.Provider value={{ LoginHandler, LogoutHandler }}>
                {isLoggedIn ? <Home /> : <Login />}
            </AuthContext.Provider>
        </div>
    );
}

export default Auth;