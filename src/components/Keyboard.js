import '../styles/components/Keyboard.css';

import React, { useState, useEffect } from 'react';

export function Keyboard({getLetters}){
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']
    const [selectValue, setSelectValue] = useState('');

    function clickKeyboard(){
        let letters = document.querySelectorAll('#keyboard .letters a');

        letters.forEach(letter => 
            letter.addEventListener("click", (e) => {
                setSelectValue(e.target.textContent);
            })
        )
    }

    useEffect(() => {
        clickKeyboard();
        getLetters(selectValue);
    });


    return(
        <div id="keyboard">
            <div className="letters">
                {allLetters.map((letter, index) => (
                    <a className="button-letter" key={index} tabIndex={1}>{letter}</a>
                ))}
            </div>
        </div>
    )
} 