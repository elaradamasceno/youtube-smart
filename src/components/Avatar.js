import React, { useState, useEffect } from 'react';

import '../styles/components/Avatar.css';

export function Avatar({}){
    const [nameUser, setNameUser ] = useState('');
    
    function getName(){
        setNameUser(localStorage.getItem('userName').substr(0, 1));
    }

    useEffect(() => {
        getName()
    }, [])

    return(
        <div className="avatar">
            <div>
                <span> { nameUser } </span>
            </div>
        </div>
    )
}