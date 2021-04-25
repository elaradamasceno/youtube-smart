import React, { useState, useEffect } from 'react';
import { UserOutlined, SearchOutlined, HomeOutlined, HeartOutlined, YoutubeOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Avatar } from './Avatar';

import '../styles/components/ExperienceBar.css';

export function ExperienceBar({setIsLogged, updateElements}){
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

        updateElements({screen: 'experience-bar'});
    })

    return(
        <div className="experience-bar" id="experience-bar">
            <div>
                <YoutubeOutlined className="i-youtube" />

                <Link tabIndex="1" to="/" onClick={() => { updateElements({screen: 'home'}); }} className="ant-btn experience-icons i-home navigation selected">
                    <HomeOutlined />
                </Link>

                <Link to="search" onClick={() => { updateElements({screen: 'search'}); }}  className="ant-btn experience-icons i-search navigation" tabIndex="2">
                    <SearchOutlined />
                </Link>

                <Link to="favorites" onClick={() => { updateElements(true); }} className="ant-btn experience-icons i-favorites navigation" tabIndex="3">
                    <HeartOutlined />
                </Link>

                { userLogged ? (
                    <Avatar />
                ): (
                    <Link to="Login" onClick={() => { updateElements(true); }} className="ant-btn experience-icons i-area-user navigation" tabIndex="4">
                        <UserOutlined />
                    </Link>
                )}
            </div>
        </div>
    )
}