import '../styles/components/Keyboard.css';

import React, { useState, useEffect } from 'react';

export function Keyboard({getKeys}){
    const [selectValue, setSelectValue] = useState('');
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']

    function clickKeyboard(){
        let keys = document.querySelectorAll('#keyboard .keys button');

        keys.forEach(k => 
            k.addEventListener("click", (e) => {
                setSelectValue(e.target.textContent);
            })
        )
    }

    function focusButton(){
        // document.getElementById('initial-button').focus();
    }

    useEffect(() => {
        clickKeyboard();
        getKeys(selectValue);
    });

    useEffect(() => {
        focusButton();
    }, [])

    return(
        <div id="keyboard">
            <div className="keys">
                {allLetters.map((letter, index) => (
                    <button className="button-letter" key={index} tabIndex={1}>{letter}</button>
                ))}
            </div>
        </div>
    )
}