import React, {createContext, useEffect, useState} from 'react';
import * as firebase from "firebase";
import {UserContext} from "./UserContext";

const auth = firebase.auth()
export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            setUser(userAuth)
        })
    })
    return (
        <>
            <UserContext.Provider value={user}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}