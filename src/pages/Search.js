import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import { Keyboard } from  '../components/Keyboard';
import '../styles/components/Search.css';

export function Search(){
    const [ value, setValue ] = useState('');

    function getLetters(data){
        let element = document.getElementById('field-search');
        let concatValue = element.value + data;
        setValue(concatValue)
    }

    function clearLetter(data){ 
        let element = document.getElementById('field-search');
        element.value = value.slice(0, -data);
    }

    return(
        <div className="search">
            <div>
                <h2>Pesquisar</h2>
                <div className="content-search">
                    <div className="field-search">
                        <Input 
                            id="field-search" 
                            className="navigation" 
                            size="large" 
                            placeholder="Buscar" 
                            defaultValue={value}
                            value={value}
                        />

                        <div className="buttons-search">
                            <Button 
                                id="btn-search" 
                                className="navigation" 
                                type="primary" 
                                disabled={value !== '' ? false : true}
                            >
                                Entrar
                            </Button>
                        </div>
                    </div>
                    <Keyboard getLetters={getLetters} clearLetter={clearLetter} typeScreen="login" />
                </div>
            </div>


        </div>
    )
}