import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input, Button} from 'antd';

import { Keyboard } from  '../components/Keyboard';
import '../styles/components/Login.css';

let fieldId;

export function Login({ setFunctionKeyDown }){
    const [ visibleKeyboard, setVisibleKeyboard ] = useState(false);
    // const [ fieldId, setFieldId] = useState('');

    const [valueMail, setMail] = useState('');
    const [valueName, setName] = useState('');
    const [valuePassword, setPassword] = useState('');

    function fieldFocus(id){
        setVisibleKeyboard(true);
        // setFieldId(id);
        fieldId = id;
    }

    function getLetters(data){
        let element = document.getElementById(`basic_${fieldId}`);
        element.focus();

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
        let element = document.getElementById(`basic_${fieldId}`);
        element.value = valueName.slice(0, -data);
    }

    useEffect((e) => {
        console.log('opa ===>>', fieldId)   
    }, [fieldId]);

    useEffect(() => {
        setFunctionKeyDown('login');
    }, [])


    return(
        <div className="login">
            <h2>Faça o login para ter a melhor experiência</h2>

            <div className="content-login">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onSubmitCapture={() => {console.log('opaa')}}
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