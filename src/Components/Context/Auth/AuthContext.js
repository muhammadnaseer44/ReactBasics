import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    LoginHandler: () => { },
    LogoutHandler: () => { }
});

export default AuthContext;