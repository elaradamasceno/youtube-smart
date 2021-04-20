import React, { useState, useEffect } from 'react';
import { UserOutlined, SearchOutlined, HomeOutlined, HeartOutlined, YoutubeOutlined} from '@ant-design/icons';
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

    useEffect(() => {
        let element = document.querySelector('.i-home');
        element.focus();
    })

    return(
        <div className="experience-bar">
            <div>
                <YoutubeOutlined className="i-youtube" />

                <Link tabIndex="1" to="/" className="experience-icons i-home navigation selected">
                    <HomeOutlined />
                </Link>

                <Link to="search" className="experience-icons i-search navigation" tabIndex="2">
                    <SearchOutlined />
                </Link>

                <Link to="favorites" className="experience-icons i-favorites navigation" tabIndex="3">
                    <HeartOutlined />
                </Link>

                { userLogged ? (
                    <Link to="area-user" tabIndex="4" className="experience-icons navigation">
                        Elara
                    </Link>
                ): (
                    <Link to="Login" className="experience-icons i-area-user navigation" tabIndex="4">
                        <UserOutlined />
                    </Link>
                )}
            </div>
        </div>
    )
}