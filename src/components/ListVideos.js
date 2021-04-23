import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { PlayerVideo } from '../components/PlayerVideo';
import '../styles/components/ListVideos.css';

export function ListVideos({ listVideos, typeScreen }){
    const [isPlayerVisible, setPlayerVisible] = useState(false);

    function showPlayer(){
        setPlayerVisible(true);
    };


    return(
        <div className="list-videos">
            { listVideos !== false && listVideos !== undefined && listVideos.map(({ id, snippet = {} }) => {
                const { title, description, channelTitle, thumbnails = {}, resourceId = {}} = snippet;
                const { medium } = thumbnails;

                return (
                    <a 
                        key={id.videoId || id.playlistId} 
                        className={`videos ${typeScreen}`} 
                        onClick={showPlayer}
                        // href={`https://www.youtube.com/watch?v=${id.playlistId}`}
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

            { isPlayerVisible &&
                <PlayerVideo />
            }   
        </div>
    )
}