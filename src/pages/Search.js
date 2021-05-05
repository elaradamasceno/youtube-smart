import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { Keyboard } from  '../components/Keyboard';
import { ListVideos } from '../components/ListVideos';

import '../styles/components/Search.css';

export function Search({updateElements}){
    const [ valueSearch, setValueSearch ] = useState('');
    const [ searchIsVisible, setSearchIsVisible ] = useState(true);
    const [ resultSearch, setResultSearch ] = useState(false);
    const YOUTUBE_API_KEY =  process.env.REACT_APP_YOUTUBE_API_KEY;


    function getLetters(data){
        let element = document.getElementById('field-search');
        let concatValue = element.value + data;
        setValueSearch(concatValue)
    }

    function clearLetter(data){ 
        setValueSearch(valueSearch.slice(0, -data)) 
    }

    function actionButtonSearch(){
        request();
    }

    function backToSearch(){
        setSearchIsVisible(true)
    }

    function request(){
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${valueSearch}&type=video&key=${YOUTUBE_API_KEY}`;

        axios.get(url)
        .then(res => {
            if(res.status === 200){
                console.log(res)
                setResultSearch(res.data);
                setSearchIsVisible(false);
            }
            else{
                setResultSearch(false);
            }
        })
    }

    useEffect(() => {
        updateElements({screen: 'letters'})
    }, [])

    return(
        <div className="search">
            { searchIsVisible ? (
                <div>
                    <h2>Pesquisar</h2>
                    <div className="content-search">
                        <div className="field-search">
                            <Input 
                                id="field-search"  
                                size="large" 
                                placeholder="Buscar" 
                                defaultValue={valueSearch}
                                value={valueSearch}
                            />

                            <div className="buttons-search">
                                <Button 
                                    id="btn-search" 
                                    className="navigation" 
                                    type="primary" 
                                    disabled={valueSearch !== '' ? false : true}
                                    onClick={actionButtonSearch}
                                >
                                    Buscar
                                </Button>
                            </div>
                        </div>
                        <Keyboard getLetters={getLetters} clearLetter={clearLetter} typeScreen="login" />
                    </div>
                </div>
            ) : (
                <div className="result-search">
                    <div>
                        <Button 
                            className="navigation"
                            id="btn-back-search" 
                            size="large" 
                            type="primary" 
                            shape="circle" 
                            icon={<ArrowLeftOutlined />}
                            onClick={backToSearch} 
                        />
                        <h2>{valueSearch}</h2>
                    </div>
                    <div className="content-result-search">
                        <ListVideos listVideos={resultSearch.items} typeScreen="search" />
                    </div>
                </div>
            )}
        </div>
    )
}