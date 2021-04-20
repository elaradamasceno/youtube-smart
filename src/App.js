import React, { useEffect } from 'react';
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
    
    function onKeyDown(){
        let right = 39;
        let left = 37;
        let up = 38;
        let down = 40;
        let elements = document.querySelectorAll('.navigation');
        let totalColunas = 3;

        console.log(elements)
        
        document.addEventListener('keydown', (e) => {
            let index = 1;
            let totalItems = elements.length;
            let next = 1;

            // || e.keyCode === up || e.keyCode === down
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
                            case up:
                                next = index - totalColunas;
                                break;
                            case down:
                                next += index + (totalColunas - 1);
                        }

                        console.log('next ', next)
                        console.log('index ', index);
                        console.log('totalItems ', totalItems - 1)
                        console.log('total colunas ', totalColunas)
                    }
                    index++;
                });

                index = 1;
                if(next > totalItems)
                    return false;
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


                console.log(next)
            }
        })
    }

    useEffect(() => {
        onKeyDown();
    });

    return (
        <div className="App">
            <Router>
                <ExperienceBar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/area-user">
                            <AreaUser />
                        </Route>

                        <Route path="/search">
                            <Search />
                        </Route>

                        <Route path="/favorites">
                            <Favorites />
                        </Route>

                        <Route path="/Login">
                            <Login />
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
