
import { useEffect, useState } from 'react';
import auth from '../Firebase/firebase';
import AuthContext from './AuthContext';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)

        });
        return () => {
            unsubsribe();
        };
    }, []);

    const Logout=()=>{
      return signOut(auth)
    }

    const AuthInfo = {
        signIn,
        Logout,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;