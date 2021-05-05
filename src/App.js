import React, { useState } from 'react';
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
    let idElement = '';

    function verifyIsLogged(data){
        setIsLogged(data)
    }

    function updateElements(data){
        idElement = data.screen;
        console.log('idElement ', idElement)
        document.removeEventListener('keydown', onKeyDown, true);

        setTimeout(() => {
            document.addEventListener('keydown', onKeyDown, true);
        }, data.screen !== 'experience-bar' ? 100 : 300);
    }

    function onKeyDown(e){
        let right = 39;
        let left = 37;
        let up =38;
        let down = 40;

        setTimeout(() => {
            let elementsExperienceBar = document.querySelector('.experience-bar');
            let elementsListVideos = document.querySelectorAll(`.${idElement}`);

            let active = document.querySelector('.active')
            let elements = active.querySelectorAll('.navigation');

            let index = 1;
            let totalItems = elements.length;
            let next = 1;
            let teste = 0;

            
            if(e.keyCode === right || e.keyCode === left || e.keyCode === up || e.keyCode === down){
                elements.forEach((element, i) => {
                    if(element.classList.contains('selected')){
                        switch(e.keyCode){
                            case right:
                                if(active.classList.contains('experience-bar')){
                                    active.classList.remove('active');
                                    elementsListVideos[0].classList.add('active');
                                }
                                else{
                                    next = index + 1 ;
                                }
                                break;
                            case left:
                                if(active.classList.contains('list-videos') && active.querySelectorAll('.navigation')[0].classList.contains('selected')){
                                    active.classList.remove('active');
                                    elementsExperienceBar.classList.add('active');
                                }
                                else{
                                    next = index - 1;
                                }
                                break;
                            case up:
                                if(elementsListVideos.length > 0){
                                    for(var i = 0; i < elementsListVideos.length; i++){
                                        teste = i-1
                                        if( elementsListVideos[i].classList.contains('active') && teste >= 0){
                                            elementsListVideos[i].classList.remove('active');
                                            elementsListVideos[teste].classList.add('active');   
                                            break;                                        
                                        }
                                    }
                                }
                                break;
                            case down:
                                if(elementsListVideos.length > 0){
                                    for(var i = 0; i < elementsListVideos.length; i++){
                                        teste = i+1;
                                        if(elementsListVideos[i].classList.contains('active') && teste < elementsListVideos.length){
                                            elementsListVideos[i].classList.remove('active');
                                            elementsListVideos[teste].classList.add('active');
                                            break;
                                        }
                                        
                                    }
                                }
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

                
                if(elements.length > 0){
                    active = document.querySelector('.active')
                    elements = active.querySelectorAll('.navigation');

                    elements.forEach((element) => {
                        element.classList.remove('selected');
                        if(index === next){
                            element.classList.add('selected');
                            element.focus();            
                        }
    
                        index++;
                    });
                }
            }

        }, 100)
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
                            <Favorites updateElements={updateElements} />
                        </Route>

                        <Route path="/Login">
                            <Login verifyIsLogged={verifyIsLogged} updateElements={updateElements} />
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