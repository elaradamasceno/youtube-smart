import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Button } from 'antd';
import '../styles/components/Favorites.css';

export function Favorites({isLogged}){
    const [userLogged, setUserLogged] = useState(false);
    const history = useHistory();

    function verifyIsLogged(){
        let nameUser = localStorage.getItem('userName') !== null ? true : false;       
        setUserLogged(nameUser !== false ? true : false);     
    }

    useEffect(() => {
        verifyIsLogged();
    }, []);


    return(
        <div className="favorites">
            {userLogged ? (
                <div className="user-logged">

                </div>
            ) : (
                <div className="user-not-logged">
                    <div className="content-not-logged">
                        <div>
                            <div className="card-video"></div>
                            <div className="card-video"></div>
                            <div className="card-video"></div>
                        </div>
                        <div className="info-not-logged">
                            <h2>Assista os vídeos que você salvou</h2>
                            <span>Faça login para ver seus favoritos</span>
                        </div>
                        <div className="button-login">
                            <Button id="redirect-login" type="primary" size="large" onClick={() => { history.push("/Login"); }}>FAZER LOGIN</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}