import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Steps, Form, Input, Button} from 'antd';
import { Keyboard } from  '../components/Keyboard';
import '../styles/components/Login.css';

let fieldId;

export function Login({ verifyIsLogged }){
    const history = useHistory();
    const [ visibleKeyboard, setVisibleKeyboard ] = useState(false);
    const [valueMail, setMail] = useState('');
    const [valueName, setName] = useState('');
    const [valuePassword, setPassword] = useState('');

    const [currentStep, setCurrentStep] = useState(0);
    const { Step } = Steps;


    function fieldFocus(id){
        setVisibleKeyboard(true);
        fieldId = id;
    }

    function getLetters(data){
        const fieldsId = ['name', 'mail', 'password'];
        let element = document.getElementById(`${fieldsId[currentStep]}`);

        if(fieldsId[currentStep] === 'name'){
            let value = element.value + data;
            setName(value);
        }

        if(fieldsId[currentStep] === 'mail'){
            let value = element.value + data;
            setMail(value);
        }

        if(fieldsId[currentStep] === 'password'){
            let value = element.value + data;
            setPassword(value);
        }
    }

    function clearLetter(data){ 
        if(fieldId === 'name'){
            let value = valueName.slice(0, -data);
            setName(value);
        }

        if(fieldId === 'mail'){
            let value = valueMail.slice(0, -data);
            setMail(value);
        }

        if(fieldId === 'password'){
            let value = valuePassword.slice(0, -data);
            setPassword(value);
        }
    }

    function onSubmit(){
        window.localStorage.setItem('userName', valueName);
        history.push("/");

        verifyIsLogged(true);
    }

    function changeStep(){

    }

    useEffect((e) => {}, [fieldId]);
    // useEffect(() => { document.getElementById('basic_name').focus(); }, []);


    return(
        <div className="login">
            <h2>Faça o login para ter a melhor experiência</h2>

            <div className="content-login">
                <div>
                    <Steps current={currentStep} onChange={changeStep}>
                        <Step />
                        <Step />
                        <Step />
                    </Steps>

                    { currentStep === 0 &&  
                        <Input 
                            className="navigation"
                            id="name"  
                            size="large" 
                            placeholder="Nome" 
                            defaultValue={valueName}
                            value={valueName}
                        />
                    }

                    {currentStep === 1 && 
                        <Input 
                            className="navigation"
                            id="mail"  
                            size="large" 
                            placeholder="E-mail" 
                            defaultValue={valueMail}
                            value={valueMail}
                        />
                    }

                    {currentStep === 2 && 
                        <Input 
                            type="password"
                            className="navigation"
                            id="password"  
                            size="large" 
                            placeholder="Senha" 
                            defaultValue={valuePassword}
                            value={valuePassword}
                        />
                    }

                    <div className="button-login">
                        <Button 
                            id="btn-login-submit" 
                            className="navigation" 
                            type="primary" 
                        >
                            {currentStep === 0 || currentStep === 1 ? 'Próximo' : 'Entrar'}
                        </Button>
                    </div>
                </div>

                <Keyboard getLetters={getLetters} clearLetter={clearLetter} typeScreen="login" />
            </div>
        </div>
    )
}