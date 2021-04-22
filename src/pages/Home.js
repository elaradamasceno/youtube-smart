import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ListVideos } from '../components/ListVideos';
import '../styles/components/Home.css';

export function Home(){
    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const [ resultAPI, setResultAPI ] = useState();
    const YOUTUBE_API_KEY =  process.env.REACT_APP_YOUTUBE_API_KEY;

    function callRequestAPI(id){
        let channel = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ';
        requestAPIYoutube(channel)
    }

    function requestAPIYoutube(channelId){
        // let url = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=PLFgquLnL59am_JTz5qNCkZ8RUchRkXl7I&key=${YOUTUBE_API_KEY}`
        let channel = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ';
        let url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=20`;

        axios.get(url)
        .then(res => {
            if(res.status === 200){
                setResultAPI(res.data);
            }
            else{
                setResultAPI(false);
            }
        })
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
                </div>
            </div>
        </div>
    )
}