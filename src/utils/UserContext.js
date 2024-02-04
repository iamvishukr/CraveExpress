import { createContext } from "react";

const UserContext = createContext({
    loggedIn: "Default User", 
    random: "Test 123",
});

export default UserContext;