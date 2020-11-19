import React, {useEffect, useState} from 'react';
import firebase from "../../firebase";
import {PageButton} from "./PageButton";

export const ActualCollab = () => {

    const [actualCollabType, setActualCollabType] = useState('foundations');
    const [currentPage, setCurrentPage] = useState(1)

    const db = firebase.database();

    const descriptions = {
        foundations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        organizations: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        locals: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    }
        return (
            <div className='collab-container'>
                <div className='collab-center'>
                    <div className='button-group'>
                        {/*---------CHANGE COLLAB TYPE AND SET PAGE TO 1----------------------*/}
                        <button className='show-button' onClick={() => {
                            setActualCollabType("foundations");
                            setCurrentPage(1);
                        }}>Fundacjom
                        </button>
                        <button className='show-button' onClick={() => {
                            setActualCollabType("organizations");
                            setCurrentPage(1);
                        }}>Organizacjom pozarządowym
                        </button>
                        <button className='show-button' onClick={() => {
                            setActualCollabType("locals");
                            setCurrentPage(1);
                        }}>Lokalnym zbiórkom
                        </button>

                    </div>
                    <div className='collab-main-desc'>{descriptions[actualCollabType]}</div>

                    <div className='collab-page-container'>
                        <ul className='collabgit init-list'>
                        </ul>
                        <ul className='page-numbers'>
                        </ul>
                    </div>
                </div>
            </div>

        )

    }
    {

}