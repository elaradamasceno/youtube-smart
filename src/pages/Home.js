import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'antd';

import '../styles/components/Home.css';

export function Home(){
    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const [ resultAPI, setResultAPI ] = useState();
    
    // Não esquecer de removeEventListener;
    const YOUTUBE_API_KEY = 'AIzaSyAB_ezQZJaTXqwEsRPdNV8A7O8lNaQYyRk'

    function callRequestAPI(){
        let channel = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ'
    }

    function requestAPIYoutube(channelId){
        // let url = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=PLFgquLnL59am_JTz5qNCkZ8RUchRkXl7I&key=${YOUTUBE_API_KEY}`
        let channel = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ';
        let url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=9`
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => { setResultAPI(result); },
            (error) => { 
                console.error('Error API ', error); 
            }
        )
    }

    useEffect(() => {
        requestAPIYoutube();
    },[]);


    return(
        <div className="home">
            <div>
                <h2>Em alta</h2>
                <div className="content-videos">
                    {resultAPI && resultAPI.items.map(({ id, snippet = {} }) => {
                        const { title, channelTitle, thumbnails = {}, resourceId = {}} = snippet;
                        const { medium } = thumbnails;
                        console.log(resultAPI)
                        
                        return (
                            <div key={id} className="videos">
                                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                                    <p>
                                        <img src={medium.url} alt="" />
                                    </p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* <div>
                <h2>Notícias sobre COVID-19</h2>
                <div className="content-videos">
                    {resultAPI && resultAPI.items.map(({ id, snippet = {} }) => {
                        const { title, channelTitle, thumbnails = {}, resourceId = {}} = snippet;
                        const { medium } = thumbnails;
                        
                        return (
                            <div key={id} className="videos">
                                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                                    <p>
                                        <img height={medium.height} src={medium.url} alt="" />
                                    </p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div> */}
        </div>
    )
}