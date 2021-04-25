import React, { useEffect, useState } from 'react';
import './styles/global.css';
import { ExperienceBar } from './components/ExperienceBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { AreaUser } from './pages/AreaUser';
import { Search } from './pages/Search';
import { Favorites } from './pages/Favorites';
import { Page404 } from './pages/Page404';
import { Login } from './pages/Login';


function App() {
    const [ isLogged, setIsLogged ] = useState(false);

    function verifyIsLogged(data){
        setIsLogged(data)
    }

    function updateElements(data){
        if(data.screen !== 'experience-bar'){
            setTimeout(() => {
                onKeyDown(1);
            }, 100)
        }
        else {
            setTimeout(() => {
                onKeyDown();
            }, 100)
        }
    }

    function onKeyDown(nextIndex){
        let right = 39;
        let left = 37;

        setTimeout(() => {
            let elements = document.querySelectorAll('.ant-btn.navigation');
            
            document.addEventListener('keydown', (e) => {
                let index = nextIndex || 1;
                let totalItems = elements.length;
                let next = nextIndex || 1;   
    
                if(e.keyCode === right || e.keyCode === left){
                    elements.forEach((element, i) => {
                        if(element.classList.contains('selected')){
                            switch(e.keyCode){
                                case right:
                                    next += index;
                                    break;
                                case left:
                                    next = index - 1;
                                    break;
                            }
                        }
                        index++;
                    });
    
                    index = 1;
                    if(next > totalItems){
                        return false;
                    }
                    else if(next < 1)
                        return false;
                    
                    elements.forEach((element) => {
                        element.classList.remove('selected');
                        if(index === next){
                            element.classList.add('selected');
                            element.focus();
                        }
    
                        index++;
                    })
                }
            })
        }, 200)
    }

    return (
        <div className="App">
            <Router>
                <ExperienceBar setIsLogged={isLogged} updateElements={updateElements} />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home updateElements={updateElements} />
                        </Route>

                        <Route path="/area-user">
                            <AreaUser />
                        </Route>

                        <Route path="/search">
                            <Search updateElements={updateElements} />
                        </Route>

                        <Route path="/favorites">
                            <Favorites />
                        </Route>

                        <Route path="/Login">
                            <Login verifyIsLogged={verifyIsLogged} />
                        </Route>

                        <Route>
                            <Page404/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;