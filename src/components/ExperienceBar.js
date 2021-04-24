import React, { useState, useEffect } from 'react';
import { UserOutlined, SearchOutlined, HomeOutlined, HeartOutlined, YoutubeOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Avatar } from './Avatar';

import '../styles/components/ExperienceBar.css';

export function ExperienceBar({setIsLogged}){
    const [userLogged, setUserLogged] = useState(false);
    let nameUser = '';

    function verifyIsLogin(){
        nameUser = localStorage.getItem('userName') !== null ? true : false;
                
        setUserLogged(nameUser !== false ? true : false);
    }

    useEffect(() => {
        verifyIsLogin();
        let element = document.querySelector('.i-home');
        element.focus();
    })

    useEffect(() => {
        console.log('oooo ', setIsLogged)
    }, [setIsLogged])

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
                    <Avatar />
                ): (
                    <Link to="Login" className="experience-icons i-area-user navigation" tabIndex="4">
                        <UserOutlined />
                    </Link>
                )}
            </div>
        </div>
    )
}