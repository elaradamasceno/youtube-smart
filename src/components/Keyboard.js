import '../styles/components/Keyboard.css';

import React, { useState, useEffect } from 'react';

export function Keyboard({getKeys}){
    const [selectValue, setSelectValue] = useState('');

    function clickKeyboard(){
        let keys = document.querySelectorAll('#keyboard .keys span');

        keys.forEach(k => 
            k.addEventListener("click", (e) => {
                setSelectValue(e.target.textContent);
            })
        )
    }

    useEffect(() => {
        clickKeyboard();
        getKeys(selectValue);
    });


    return(
        <div id="keyboard">
            <div className="keys">
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>I</span>
                <span>J</span>
                <span>K</span>
                <span>L</span>
                <span>M</span>
                <span>N</span>
                <span>O</span>
                <span>P</span>
                <span>Q</span>
                <span>R</span>
                <span>S</span>
                <span>T</span>
                <span>U</span>
                <span>V</span>
                <span>W</span>
                <span>X</span>
                <span>Y</span>
                <span>Z</span>
                <span>-</span>
            </div>
        </div>
    )
}