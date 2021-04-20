import '../styles/components/Keyboard.css';

import React, { useState, useEffect } from 'react';
import { Button} from 'antd';

export function Keyboard({getLetters, clearLetter, typeScreen}){
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
    const otherCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&', '#', '@', '(', ')', '!', '?', ':', '.', '"'];
    const [visibleLetters, setVisibleLetters ] = useState(true);
    const [selectValue, setSelectValue] = useState('');
    let clear = 0;

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
        clear = clear + 1;
        clearLetter(clear)
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
                <Button className="buttons-keyboard" type="primary" onClick={actionSpace}>Espaço</Button>
                <Button className="buttons-keyboard" type="primary" onClick={actionClear}>Limpar</Button>
                { typeScreen !== 'login' && 
                    <Button className="buttons-keyboard" type="primary">Pesquisar</Button>
                }
                <Button className="buttons-keyboard" id="special-characters" type="primary" shape="circle" size="large" onClick={displayOtherCharacters}>
                    {visibleLetters ? '&123' : 'ABC'}
                </Button>
            </div>
        </div>
    )
} 