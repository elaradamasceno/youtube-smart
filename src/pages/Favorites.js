import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Button } from 'antd';
import '../styles/components/Favorites.css';

export function Favorites({isLogged}){
    const [userLogged, setUserLogged] = useState(false);
    const [ savedVideo, setSavedVideo ] = useState([]);
    const history = useHistory();

    function verifyIsLogged(){
        let nameUser = localStorage.getItem('userName') !== null ? true : false;       
        setUserLogged(nameUser !== false ? true : false);     
    }

    function verifySavedVideo(){
        setSavedVideo(JSON.parse(localStorage.getItem('savedVideo')));
    }

    useEffect(() => {
        verifyIsLogged();
        verifySavedVideo();
    }, []);


    return(
        <div className="favorites">
            {userLogged ? (
                <div>
                    <h2>{savedVideo.length > 0 ? 'Seus vídeos salvos' : 'Você não tem vídeos salvos'}</h2>
                    <div className="user-logged">
                        { savedVideo.length > 0 && savedVideo.map((video, index) => {
                            return(
                                <>
                                    <a className="video-saved" key={index}>
                                        <p>
                                            <img src={video.thumbnails.medium.url} alt="" />
                                        </p>
                                        <div className="info-videos">
                                            <h3 className="title-videos"> {video.title} </h3>
                                            <p className="description-videos"> {} </p> 
                                        </div>
                                    </a>
                                </>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className="user-not-logged">
                    <div className="content-not-logged">
                        <div>
                            <div className="card-video"></div>
                            <div className="card-video"></div>
                            <div className="card-video"></div>
                        </div>
                        <div className="info-not-logged">
                            <h2>Assista os vídeos que você salvou</h2>
                            <span>Faça login para ver seus favoritos</span>
                        </div>
                        <div className="button-login">
                            <Button id="redirect-login" type="primary" size="large" onClick={() => { history.push("/Login"); }}>FAZER LOGIN</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}