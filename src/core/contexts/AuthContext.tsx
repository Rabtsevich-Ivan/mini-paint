import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({ children }: any) {
    interface User {
        email: string;
    }

    const [currentUser, setCurrentUser] = useState<User>();

    function signup(email:any, password:any) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email:any, password:any) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        // auth.onAuthStateChanged return method, which will
        // delete this listener when we unmount this component
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
