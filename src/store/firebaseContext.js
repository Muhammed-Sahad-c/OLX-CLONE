// context configuration
import { createContext, useState } from "react";

export const Context = createContext(null);

// authenticaton compnenets
export const AuthContext = createContext(null)


// exporting usercontext 
export const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}