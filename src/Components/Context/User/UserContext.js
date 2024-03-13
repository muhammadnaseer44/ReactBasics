import React from "react";

const UserContext = React.createContext({
    isLoggedIn: false,
    LoginHandler: () => { },
    LogoutHandler: () => { }
});

export default UserContext;