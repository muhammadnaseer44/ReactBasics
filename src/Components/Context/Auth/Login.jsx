import { useContext } from "react";
import AuthContext from "./AuthContext";

const Login = () => {
    const auth = useContext(AuthContext);
    const onLogin = () => {
        auth.LoginHandler()
    }
    return (
        <>
            <button className=' bg-blue-600 rounded p-1 text-white' onClick={onLogin}>Login</button>
        </>
    );
}

export default Login;