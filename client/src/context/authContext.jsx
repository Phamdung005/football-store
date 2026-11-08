import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storeUser = localStorage.getItem("user");
        return storeUser ? JSON.parse(storeUser) : null;
    });

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
};
export default AuthProvider;