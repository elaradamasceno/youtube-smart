import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

import { Keyboard } from  '../components/Keyboard';

export function Search(){
    const [ value, setValue ] = useState('');

    function getLetters(data){
        console.log('data ', data)
    }

    function clearLetter(data){ 
        console.log('clear')
        // let element = document.getElementById(`basic_${fieldId}`);
        // element.value = valueName.slice(0, -data);
    }

    return(
        <div className="search">
            <div class="field-search">
                <Input size="large" placeholder="large size" />
            </div>
            <Keyboard getLetters={getLetters} clearLetter={clearLetter} typeScreen="login" />
        </div>
    )
}