import React, { useState, useEffect, Fragment} from 'react';
import { Modal, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { PlayerVideo } from '../components/PlayerVideo';
import '../styles/components/ListVideos.css';

let savedTrilhoMusic = [];
let savedTrilhoNews = [];
let savedTrilhoSports = [];
let savedVideo = [];
export function ListVideos({ listVideos, typeScreen }){
    const [ isPlayerVisible, setPlayerVisible ] = useState(false);
    const [ videoId, setVideoId ] = useState('');
    const [ userIsLogged, setUserIsLogged ] = useState(false);

    function showPlayer(data){
        let splitData = data.default.url.split('/');
        setVideoId(splitData[4])
        setPlayerVisible(true);
    };

    function actionSaveVideo(snippet, channelTitle){
        let allVideos = [];
        if(channelTitle === 'Music'){
            savedTrilhoMusic.push(snippet);

            let validateVideo = savedTrilhoMusic.filter(function(este, i) {
                return savedTrilhoMusic.indexOf(este) === i;
            });

            savedTrilhoMusic = validateVideo;
        }
        else if(channelTitle === 'News'){
            savedTrilhoNews.push(snippet);

            let validateVideo = savedTrilhoNews.filter(function(este, i) {
                return savedTrilhoNews.indexOf(este) === i;
            });

            savedTrilhoNews = validateVideo;
        }
        else if(channelTitle === 'Sports'){
            savedTrilhoSports.push(snippet);

            let validateVideo = savedTrilhoSports.filter(function(este, i) {
                return savedTrilhoSports.indexOf(este) === i;
            });

            savedTrilhoSports = validateVideo
        }
        else{
            savedVideo.push(snippet);

            let validateVideo = savedVideo.filter(function(este, i) {
                return savedVideo.indexOf(este) === i;
            });

            savedVideo = validateVideo;
        }

        allVideos = savedTrilhoMusic.concat(savedTrilhoNews, savedTrilhoSports, savedVideo);
        window.localStorage.setItem('savedVideo', JSON.stringify(allVideos));
        
    }

    function userLogged(){
        let nameUser = localStorage.getItem('userName') !== null ? true : false;      
        setUserIsLogged(nameUser !== false ? true : false);
    }

    useEffect(() => {
        userLogged();
    }, [])


    return(
        <div className="list-videos">
            { listVideos !== false && listVideos !== undefined && listVideos.map((video, index) => {
                return (
                    <Fragment key={video.id.playlistId}>
                        <Button 
                            className={`nagivation videos ${typeScreen}`} 
                            onClick={() => {showPlayer(video.snippet.thumbnails)}}
                        >
                            <div>
                                <p>
                                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                                </p>
                                <div className="info-videos">
                                    <h1 className="title-videos"> {video.snippet.title} </h1>
                                    <p className="description-videos"> {video.snippet.description} </p> 
                                </div>
                            </div>
                        </Button>
                        {userIsLogged && 
                            <Button
                                type="primary" 
                                className={`button-save ${typeScreen} navigation`} 
                                size="large" 
                                icon={<HeartOutlined />}
                                onClick={() => {actionSaveVideo(video.snippet, video.snippet.channelTitle)}}
                            >
                            </Button>
                        }
                    </Fragment>
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