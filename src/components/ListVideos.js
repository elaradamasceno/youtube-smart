import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { PlayerVideo } from '../components/PlayerVideo';
import '../styles/components/ListVideos.css';

export function ListVideos({ listVideos, typeScreen }){
    const [ isPlayerVisible, setPlayerVisible ] = useState(false);
    const [ videoId, setVideoId ] = useState('');
    let savedVideo = [];

    function showPlayer(data){
        let splitData = data.default.url.split('/');
        setVideoId(splitData[4])
        setPlayerVisible(true);
    };

    function actionSaveVideo(id, snippet){
        savedVideo.push(snippet);
        window.localStorage.setItem('savedVideo', JSON.stringify(savedVideo));
    }


    return(
        <div className="list-videos">
            { listVideos !== false && listVideos !== undefined && listVideos.map(({ id, snippet = {} }) => {
                const { title, description, thumbnails = {} } = snippet;
                const { medium } = thumbnails;
                
                return (
                    <>
                        <a 
                            key={id.playlistId} 
                            className={`videos ${typeScreen}`} 
                            onClick={showPlayer}
                            onClick={() => {showPlayer(thumbnails)}}
                        >
                            <div>
                                <p>
                                    <img src={medium.url} alt="" />
                                </p>
                                <div className="info-videos">

                                    <h1 className="title-videos"> {title} </h1>
                                    <p className="description-videos"> {description} </p> 
                                </div>
                            </div>
                        </a>
                        <Button 
                            type="primary" 
                            className={`button-save ${typeScreen}`} 
                            size="large" 
                            icon={<HeartOutlined />}
                            onClick={() => {actionSaveVideo(id, snippet)}}
                        >
                        </Button>
                    </>
                )
            })}

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
    )
}