import React, {useContext} from 'react';
import {Login} from "./Login";
import {Register} from "./Register";
import {UserContext} from "../../../providers/UserContext";
import {HelloMessage} from "./HelloMessage";

export const AuthLook = () => {
    const user = useContext(UserContext)
    if(user!==null){
        return    <div className='auth-container'>
           <HelloMessage mail={user.email}/>
            <Login/>
            <Register/>
        </div>
    }
    return (
        <div className='auth-container'>
            <Login/>
            <Register/>
        </div>
    )
}