import '../styles/components/Keyboard.css';

import React, { useState, useEffect } from 'react';
import { Button} from 'antd';

export function Keyboard({getLetters}){
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
    const otherCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&', '#', '@', '(', ')', '!', '?', ':', '.', '"'];
    const [visibleLetters, setVisibleLetters ] = useState(true);
    const [selectValue, setSelectValue] = useState('');

    function clickKeyboard(){
        let letters = document.querySelectorAll('#keyboard .letters a');

        letters.forEach(letter => 
            letter.addEventListener("click", (e) => {
                setSelectValue(e.target.textContent);
            })
        )
    }

    function actionSpace(){
        setSelectValue(' ');
    }

    function actionClear(){

    }

    function displayOtherCharacters(){
        setVisibleLetters(!visibleLetters)
    }

    useEffect(() => {
        clickKeyboard();
        getLetters(selectValue);
    });


    return(
        <div id="keyboard">
            <div className="letters">
                { visibleLetters ? allLetters.map((letter, index) => (
                    <a className="button-letter" key={index} tabIndex={1}>{letter}</a>
                )) : (
                    otherCharacters.map((character, index) => (
                        <a className="button-letter" key={index} tabIndex={1}>{character}</a>
                )))}
            </div>
            <div className="buttons">
                <Button type="primary" onClick={actionSpace}>Espaço</Button>
                <Button type="primary">Limpar</Button>
                <Button type="primary">Pesquisar</Button>
                <Button id="special-characters" type="primary" shape="circle" size="large" onClick={displayOtherCharacters}>
                    {visibleLetters ? '&123' : 'ABC'}
                </Button>
            </div>
        </div>
    )
} 