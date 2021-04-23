import React, { useEffect, useState } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import axios from 'axios';

import { ListVideos } from '../components/ListVideos';
import '../styles/components/Home.css';

export function Home(){
    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const YOUTUBE_API_KEY =  process.env.REACT_APP_YOUTUBE_API_KEY;

    const [ errorRequest, setErrorRequest ] = useState(false);
    const [ resultAPI, setResultAPI ] = useState([]);
    const [ items, setItems ] = useState([]);
    const [ visibleAllVideos, setVisibleAllVideos ] = useState(false);

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
                let allItems = [];

                axios.get(url)
                .then(res => {
                    if(res.status === 200){
                        window.localStorage.setItem(element.type, JSON.stringify(res.data));
                        resultRequest.push({
                            title: element.title,
                            type: element.type,
                            data: res.data
                        });

                        allItems.push({
                            type: element.type,
                            data: res.data.items
                        });

                        setResultAPI(resultRequest);
                        setItems(allItems);
                    }
                })
            });
        }
        else{
            let arrayStorage = [JSON.parse(music), JSON.parse(news), JSON.parse(sports)];
            let allItems = [];

            channels.forEach((element, index) => {
                resultRequest.push({
                    title: element.title,
                    type: element.type,
                    data: arrayStorage[index]
                });

                allItems.push({
                    type: element.type,
                    data: arrayStorage[index].items.slice(0, 4)
                });

            });
            
            setItems(allItems);
            setResultAPI(resultRequest);  
        }
    }

    function actionMoreItems(index, element){
        setVisibleAllVideos(!visibleAllVideos);
        let elementType = [element.type];
        let result = []

        if(visibleAllVideos)
            result = items.reduce((acc, o) => acc.concat(elementType.includes(o.type) ? Object.assign(o, { data: element.data.items}) : o), []);
        else
            result = items.reduce((acc, o) => acc.concat(elementType.includes(o.type) ? Object.assign(o, { data: element.data.items.slice(0, 4)}) : o), []);

        setItems(result);
    }

    useEffect(() => {
        callRequestAPI();
    },[]);


    return(
        <div className="home">
            {resultAPI.map((element, index) => {
                return(
                    <div key={index}>
                        <h2>{element.title}</h2>
                        <div className="content-videos">
                            <ListVideos listVideos={items[index].data} typeScreen="home" />
                            <a className="btn-music" onClick={() => actionMoreItems(index, element)}>
                                { visibleAllVideos ? ( <ArrowDownOutlined /> ) : ( <ArrowUpOutlined /> )}
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}