import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Steps, Form, Input, Button} from 'antd';
import { Keyboard } from  '../components/Keyboard';
import '../styles/components/Login.css';

let current = 0;
export function Login({ verifyIsLogged }){
    const history = useHistory();
    const [valueMail, setMail] = useState('');
    const [valueName, setName] = useState('');
    const [valuePassword, setPassword] = useState('');
    const [fieldRequired, setFieldRequired] = useState(false);

    const [currentStep, setCurrentStep] = useState(current);
    const { Step } = Steps;


    function getLetters(data){
        const fieldsId = ['name', 'mail', 'password'];
        let element = document.getElementById(`${fieldsId[current]}`);

        if(fieldsId[current] === 'name'){
            let value = element.value + data;
            setName(value);
        }

        if(fieldsId[current] === 'mail'){
            let value = element.value + data;
            setMail(value);
        }

        if(fieldsId[current] === 'password'){
            let value = element.value + data;
            setPassword(value);
        }
    }

    function clearLetter(data){ 
        const fieldsId = ['name', 'mail', 'password'];
        if(fieldsId[currentStep] === 'name'){
            let value = valueName.slice(0, -data);
            setName(value);
        }

        if(fieldsId[currentStep] === 'mail'){
            let value = valueMail.slice(0, -data);
            setMail(value);
        }

        if(fieldsId[currentStep] === 'password'){
            let value = valuePassword.slice(0, -data);
            setPassword(value);
        }
    }

    function changeStep(){
        if(currentStep === 0){
            if(valueName === "")
                setFieldRequired(true);
            else{
                setFieldRequired(false);
                current = current+1;
                setCurrentStep(current);
                window.localStorage.setItem('userName', valueName);
            }
        }
        else if(currentStep === 1){
            if(valueMail === "")
                setFieldRequired(true)
            else{
                setFieldRequired(false);
                current = current+1;
                setCurrentStep(current);
            }
        }
        else if(currentStep === 2){
            if(valuePassword === "")
                setFieldRequired(true);
            else{
                setFieldRequired(false);
                history.push("/");
                verifyIsLogged(true);
            }
        }
    }


    return(
        <div className="login">
            <h2>Fa??a o login para ter a melhor experi??ncia</h2>

            <div className="content-login">
                <div>
                    <Steps current={currentStep}>
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
                    { fieldRequired && <span className="field-required">Este campo ?? obrigat??rio</span> }

                    <div className="button-login">
                        <Button 
                            id="btn-login-submit" 
                            className="navigation" 
                            type="primary" 
                            onClick={changeStep}
                        >
                            {currentStep === 0 || currentStep === 1 ? 'Pr??ximo' : 'Entrar'}
                        </Button>
                    </div>
                </div>

                <Keyboard getLetters={getLetters} clearLetter={clearLetter} typeScreen="login" />
            </div>
        </div>
    )
}