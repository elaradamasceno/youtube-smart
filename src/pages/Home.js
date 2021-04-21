import React, { useEffect, useState } from 'react';
import axios from 'axios'

export function Home(){
    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const [ resultAPI, setResultAPI ] = useState();
    
    // Não esquecer de removeEventListener;
    const YOUTUBE_API_KEY = 'AIzaSyAB_ezQZJaTXqwEsRPdNV8A7O8lNaQYyRk'

    function requestAPIYoutube(){
        let url = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=PLOU2XLYxmsIKXYR_3iOWnI4h1Do_aa8dn&key=${YOUTUBE_API_KEY}`
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setResultAPI(result);

                console.log(resultAPI)
            },

            (error) => {
                console.error('Error API ', error);
                // setResultAPI(false);
            }
        )
    }

    useEffect(() => {
        requestAPIYoutube();
    },[]);


    return(
        <div>
            {resultAPI && resultAPI.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium } = thumbnails;
                
                return (
                    <div key={id}>
                        <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <p>
                            <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                        </p>
                        <h3>{ title }</h3>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}