import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { PlayerVideo } from '../components/PlayerVideo';
import '../styles/components/ListVideos.css';

export function ListVideos({ listVideos, typeScreen }){
    const [isPlayerVisible, setPlayerVisible] = useState(false);
    const [videoId, setVideoId ] = useState('');

    function showPlayer(data){
        let splitData = data.default.url.split('/');
        setVideoId(splitData[4])
        setPlayerVisible(true);
    };


    return(
        <div className="list-videos">
            { listVideos !== false && listVideos !== undefined && listVideos.map(({ id, snippet = {} }) => {
                const { title, description, thumbnails = {}, resourceId = {}} = snippet;
                const { medium } = thumbnails;
                
                return (
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