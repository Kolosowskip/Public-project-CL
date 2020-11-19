import React from 'react';
import decoration from '../../../assets/Decoration.svg';
import {ActualCollab} from "./ActualColab";

export const Collaborators = () => {
    return (
        <div className='collab-container'>
            <h2>Komu pomagamy?</h2>
            <img src={decoration}/>
            <ActualCollab/>
        </div>
    )
}