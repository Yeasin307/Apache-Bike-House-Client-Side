import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, getIdToken } from "firebase/auth";


// initialize firebase
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to database
                saveUser(email, name, 'post');

                // send name to firebase after creat
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // set admin

    useEffect(() => {
        fetch(`https://secure-inlet-19520.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    // useEffect(() => {
    //     async function getAdmin() {
    //         const res = await fetch(`https://secure-inlet-19520.herokuapp.com/users/${user.email}`);
    //         const data = await res.json();
    //         setAdmin(data.admin);
    //     }
    //     getAdmin();
    // }, [user.email])


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://secure-inlet-19520.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout
    }
}

export default useFirebase;