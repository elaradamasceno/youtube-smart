import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from "react-router-dom";

import { Modal, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { PlayerVideo } from '../components/PlayerVideo';
import '../styles/components/Favorites.css';

export function Favorites({isLogged}){
    const [ isPlayerVisible, setPlayerVisible ] = useState(false);
    const [userLogged, setUserLogged] = useState(false);
    const [ savedVideo, setSavedVideo ] = useState([]);
    const [ videoId, setVideoId ] = useState('');
    const history = useHistory();

    function verifyIsLogged(){
        let nameUser = localStorage.getItem('userName') !== null ? true : false;       
        setUserLogged(nameUser !== false ? true : false);     
    }

    function verifySavedVideo(){
        setSavedVideo(JSON.parse(localStorage.getItem('savedVideo')));
    }

    function deleteVideo(index, video){
        let allVideos = savedVideo;
        allVideos.splice(index, 1);

        setSavedVideo(allVideos);

        window.localStorage.setItem('savedVideo', JSON.stringify(allVideos));
    }

    function showPlayer(data){
        let splitData = data.default.url.split('/');
        setVideoId(splitData[4])
        setPlayerVisible(true);
    };

    useEffect(() => {
        verifySavedVideo();
        verifyIsLogged();
    }, []);

    return(
        <div className="favorites">
            {userLogged ? (
                <div>
                    <h2>{savedVideo !== null && savedVideo.length > 0 ? 'Seus vídeos salvos' : 'Você ainda não tem vídeos salvos'}</h2>
                    <div className="user-logged">
                        {savedVideo !== null && savedVideo.length > 0 && savedVideo.map((video, index) => {
                            return(
                                <Fragment key={index}>
                                    <a className="video-saved" onClick={() => {showPlayer(video.thumbnails)}} >
                                        <p>
                                            <img src={video.thumbnails.medium.url} alt="" />
                                        </p>
                                        <div className="info-videos">
                                            <h3 className="title-videos"> {video.title} </h3>
                                            <p className="description-videos"> {video.description} </p> 
                                        </div>
                                    </a>
                                    <Button
                                        className="delete-video"
                                        type="primary" 
                                        size="large" 
                                        icon={<DeleteOutlined />}
                                        onClick={() => { deleteVideo(index, video)}}
                                    >
                                    </Button>
                                </Fragment>
                            )
                        })}
                    </div>

                    <Modal
                        centered
                        visible={isPlayerVisible}
                        width={600}
                        onCancel={() => setPlayerVisible(false)}
                        cancelText="Fechar"
                    >
                        <PlayerVideo videoId={videoId}/>
                    </Modal>
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