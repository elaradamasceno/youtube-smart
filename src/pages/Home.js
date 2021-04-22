import React, { useEffect, useState } from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';
import axios from 'axios';

import { ListVideos } from '../components/ListVideos';
import '../styles/components/Home.css';

export function Home(){
    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const [ resultAPI, setResultAPI ] = useState();
    const YOUTUBE_API_KEY =  process.env.REACT_APP_YOUTUBE_API_KEY;
    const [ trilhoMusic, setTrilhoMusic ] = useState([]);
    
    let allItemsMusic = [];
    let allItemsNew = [];

    function callRequestAPI(id){
        let music = ['UC-9-kyTW8ZkZNDHQJ6FgpwQ'];
        requestAPIYoutube(music)
    }

    function requestAPIYoutube(){
        let resultLocalStorage = localStorage.getItem('resultMusicHome');

        // let url = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=PLFgquLnL59am_JTz5qNCkZ8RUchRkXl7I&key=${YOUTUBE_API_KEY}`
        if(resultLocalStorage === null && resultLocalStorage === undefined){
            let channel = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ';
            let url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=20`;
    
            axios.get(url)
            .then(res => {
                if(res.status === 200){
                    window.localStorage.setItem('resultMusicHome', JSON.stringify(res.data));
                    setResultAPI(res.data);
                }
                else{
                    setResultAPI(false);
                }
            })
        }
        else {
            allItemsMusic = JSON.parse(resultLocalStorage).items;
            setTrilhoMusic(allItemsMusic)

            let filterItems = allItemsMusic.slice(0, 4);
            setResultAPI(filterItems);
        }
    }

    function actionMoreItems(id){
        setResultAPI(trilhoMusic);
    }

    useEffect(() => {
        callRequestAPI();
    },[]);


    return(
        <div className="home">
            <div>
                <h2>Música</h2>
                <div className="content-videos">
                    <ListVideos listVideos={resultAPI} typeScreen="home" />
                    <a className="btn-music" href="#" onClick={() => actionMoreItems('btn-music')}>
                        <ArrowDownOutlined />
                    </a>
                </div>
            </div>
        </div>
    )
}