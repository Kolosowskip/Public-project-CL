import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../providers/UserContext";

export const GivePage = () => {
    const user = useContext(UserContext)
    if(user!==null){
    }else if(user===null) {
        return <Link to='/' className='auth-button'>Błąd</Link>
    }
}