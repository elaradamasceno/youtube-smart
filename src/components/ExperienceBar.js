import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../styles/components/ExperienceBar.css';

export function ExperienceBar(){

    return(
        <div className="experience-bar">
            <Link to="area-user">
                <FontAwesomeIcon className="i-area-user" icon={faUserCircle} />
            </Link>

            <Link to="search">
                <FontAwesomeIcon className="i-search" icon={faSearch} />
            </Link>

            <Link to="/">
                <FontAwesomeIcon className="i-home" icon={faHome} />
            </Link>
            
            <Link to="favorites">
                <FontAwesomeIcon className="i-favorites" icon={faHeart} />
            </Link>
        </div>
    )
}