import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        if (token) {
            setLoading(false)
            setUser(true);
        }
    }, [])

    const authInfo = {
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;