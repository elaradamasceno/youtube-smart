import React, { useEffect, useState } from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';
import axios from 'axios';

import { ListVideos } from '../components/ListVideos';
import '../styles/components/Home.css';

export function Home(){
    let teste = [];

    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const YOUTUBE_API_KEY =  process.env.REACT_APP_YOUTUBE_API_KEY;

    const [ errorRequest, setErrorRequest ] = useState(false);
    const [ resultAPI, setResultAPI ] = useState([]);
    const [ items, setItems ] = useState([]);
    const [ trilhoMusic, setTrilhoMusic ] = useState([]);

    const resultRequest = [];

    function callRequestAPI(id){
        let channels = [
            {type: 'music', title: 'Música', channel: 'UC-9-kyTW8ZkZNDHQJ6FgpwQ'}, 
            {type: 'news', title: 'Notícias', channel: 'UCYfdidRxbB8Qhf0Nx7ioOYw'}, 
            {type: 'sports', title: 'Esportes', channel: 'UCEgdi0XIXXZ-qJOFPf4JSKw'}
        ];

        requestAPIYoutube(channels)
    }

    function requestAPIYoutube(channels){
        let music = localStorage.getItem('music');
        let news = localStorage.getItem('news');
        let sports = localStorage.getItem('sports');
        // console.log(channels)

        if(music === null && news === null && sports === null){
            channels.forEach((element, index) => {
                let url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${element.channel}&part=snippet,id&order=date&maxResults=20`;
    
                axios.get(url)
                .then(res => {
                    if(res.status === 200){
                        window.localStorage.setItem(element.type, JSON.stringify(res.data));
                        resultRequest.push({
                            title: element.title,
                            type: element.type,
                            data: res.data
                        });

                        setResultAPI(resultRequest);
                    }
                })
            });
        }
        else{
            let arrayStorage = [JSON.parse(music), JSON.parse(news), JSON.parse(sports)];

            channels.forEach((element, index) => {
                resultRequest.push({
                    title: element.title,
                    type: element.type,
                    data: arrayStorage[index]
                })
            });

            setResultAPI(resultRequest);
            // console.log(resultRequest)

   
        }
    }

    function actionMoreItems(i){
        console.log(i)
        // setResultAPI(trilhoMusic);
    }

    useEffect(() => {
        callRequestAPI();
    },[]);


    return(
        <div className="home">
            {resultAPI.map((element, index) => {
                console.log(items)
                return(
                    <div key={index}>
                        <h2>{element.title}</h2>
                        <div className="content-videos">
                            <ListVideos listVideos={element.data.items.slice(0, 4)} typeScreen="home" />
                            <a className="btn-music" onClick={() => actionMoreItems(index)}>
                                <ArrowDownOutlined />
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}