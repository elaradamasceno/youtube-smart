import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../styles/components/ExperienceBar.css';

export function ExperienceBar(){
    const [userLogged, setUserLogged] = useState(false);

    function verifyIsLogin(){
        // localStorage.setItem('IsLogged', true);
    }

    useEffect(() => {
        let storageLogged = localStorage.getItem('is_logged');
        setUserLogged(storageLogged !== null && storageLogged !== false ? true : false);
    })

    return(
        <div className="experience-bar">
            <div>
                { userLogged ? (
                    <Link to="area-user">
                        Elara
                    </Link>
                ): (
                    <Link to="Login" className="i-area-user">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </Link>
                )}
            </div>

            <div>
                <Link to="search" className="i-search">
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
            </div>

            <div>
                <Link to="/" className="i-home">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            </div>

            <div>
                <Link to="favorites" className="i-favorites">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
            </div>
        </div>
    )
}