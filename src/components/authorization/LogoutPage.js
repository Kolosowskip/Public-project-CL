import React from 'react';
import {AuthForm} from "./AuthForm";
import {AuthLook} from "../main_page/navbar/AuthLook";
import {Navbar} from "../main_page/navbar/Navbar";
import {Link} from "react-router-dom";
import * as firebase from "firebase";

export const LogoutPage = () => {
    const auth = firebase.auth();
    auth.signOut().catch(err=>err);
    return (
        <div className='main-container'>
            <div className='main-center'>
                <AuthLook/>
                <Navbar/>
            </div>
            <AuthForm type='logout'/>
        </div>
    )
}