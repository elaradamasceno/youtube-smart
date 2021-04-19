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

    return(
        <div className="experience-bar">
            <div>
                <YoutubeOutlined className="i-youtube" />

                <div className="content-icons">
                    { userLogged ? (
                        <Link to="area-user" tabIndex="2">
                            Elara
                        </Link>
                    ): (
                        <Link to="Login" className="i-area-user" tabIndex="2">
                            <UserOutlined />
                        </Link>
                    )}
                </div>

                <div className="content-icons">
                    <Link tabIndex="1" to="/" className="i-home">
                        <HomeOutlined />
                    </Link>
                </div>

                <div className="content-icons">
                    <Link to="search" className="i-search" tabIndex="3">
                        <SearchOutlined />
                    </Link>
                </div>

                <div className="content-icons">
                    <Link to="favorites" className="i-favorites" tabIndex="4">
                        <HeartOutlined />
                    </Link>
                </div>
            </div>
        </div>
    )
}