import '../styles/components/Keyboard.css';

import React, { useState, useEffect } from 'react';

export function Keyboard({getKeys}){
    const [selectValue, setSelectValue] = useState('');

    function clickKeyboard(){
        let keys = document.querySelectorAll('#keyboard .keys button');

        keys.forEach(k => 
            k.addEventListener("click", (e) => {
                setSelectValue(e.target.textContent);
            })
        )
    }

    function focusButton(){
        document.getElementById('initial-button').focus();
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
                <button id="initial-button" tabIndex="1">A</button>
                <button tabIndex="1">B</button>
                <button tabIndex="1">C</button>
                <button tabIndex="1">D</button>
                <button tabIndex="1">E</button>
                <button tabIndex="1">F</button>
                <button tabIndex="1">G</button>
                <button tabIndex="1">H</button>
                <button tabIndex="1">I</button>
                <button tabIndex="1">J</button>
                <button tabIndex="1">K</button>
                <button tabIndex="1">L</button>
                <button tabIndex="1">M</button>
                <button tabIndex="1">N</button>
                <button tabIndex="1">O</button>
                <button tabIndex="1">P</button>
                <button tabIndex="1">Q</button>
                <button tabIndex="1">R</button>
                <button tabIndex="1">S</button>
                <button tabIndex="1">T</button>
                <button tabIndex="1">U</button>
                <button tabIndex="1">V</button>
                <button tabIndex="1">W</button>
                <button tabIndex="1">X</button>
                <button tabIndex="1">Y</button>
                <button tabIndex="1">Z</button>
                <button tabIndex="1">-</button>
            </div>
        </div>
    )
}