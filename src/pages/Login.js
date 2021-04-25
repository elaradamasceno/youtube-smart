import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Form, Input, Button} from 'antd';
import { Keyboard } from  '../components/Keyboard';
import '../styles/components/Login.css';

let fieldId;

export function Login({ verifyIsLogged }){
    const history = useHistory();
    const [ visibleKeyboard, setVisibleKeyboard ] = useState(false);
    const [valueMail, setMail] = useState('');
    const [valueName, setName] = useState('');
    const [valuePassword, setPassword] = useState('');

    function fieldFocus(id){
        setVisibleKeyboard(true);
        fieldId = id;
    }

    function getLetters(data){
        let element = document.getElementById(`basic_${fieldId}`);

        if(fieldId === 'name'){
            let value = element.value + data;
            setName(value);
        }

        if(fieldId === 'mail'){
            let value = element.value + data;
            setMail(value);
        }

        if(fieldId === 'password'){
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

    useEffect((e) => {}, [fieldId]);
    // useEffect(() => { document.getElementById('basic_name').focus(); }, []);


    return(
        <div className="login">
            <h2>Faça o login para ter a melhor experiência</h2>

            <div className="content-login">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onSubmitCapture={ () => { onSubmit()} }
                    fields={[
                        {
                            name: ["name"],
                            value: valueName,
                        },
                        {
                            name: ["mail"],
                            value: valueMail,
                        },
                        {
                            name: ["password"],
                            value: valuePassword,
                        },
                    ]}
                >
                    <Form.Item
                        id="name"
                        label="Nome"
                        name="name"
                        size="middle"
                        defaultValue={valueName}
                        value={valueName}
                        rules={[{ required: true, message: 'Por favor, informe seu nome!' }]}
                        onFocus={() => { fieldFocus('name')}}
                        onBlur={() => { fieldFocus('name')}}
                    >   
                        <Input className="navigation" />
                    </Form.Item>

                    <Form.Item
                        id="mail"
                        label="E-mail"
                        name="mail"
                        size="middle"
                        value={valueMail}
                        rules={[{ required: true, message: 'Por favor, informe seu e-mail!' }]}
                        onFocus={() => { fieldFocus('mail')}}
                        onBlur={() => { fieldFocus('mail')}}
                    >
                        <Input className="navigation" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        size="middle"
                        value={valuePassword}
                        rules={[{ required: true, message: 'Por favor, informe sua senha' }]}
                        onFocus={() => { fieldFocus('password')}}
                    >
                        <Input type="password" className="navigation" />
                    </Form.Item>

                    <Form.Item>
                        <div className="buttons-login">
                            <Button 
                                id="btn-login-submit" 
                                className="navigation" 
                                type="primary" 
                                htmlType="submit"
                            >
                                Entrar
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
                { 
                    visibleKeyboard &&
                    <Keyboard getLetters={getLetters} clearLetter={clearLetter} typeScreen="login" />
                }  
            </div>
        </div>
    )
}