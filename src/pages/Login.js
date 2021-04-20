import React, { useState, useEffect } from 'react';
import { Form, Input, Button} from 'antd';

import { Keyboard } from  '../components/Keyboard';
import '../styles/components/Login.css';


export function Login(){
    let valueName = '';
    let valueMail = '';
    let valuePassword = '';

    const [ visibleKeyboard, setVisibleKeyboard ] = useState(false);
    const [ fieldId, setFieldId] = useState('');
    const [ username, setUserName ] = useState('');

    function fieldFocus(id){
        setFieldId(id);
        setVisibleKeyboard(true);
    }

    function getLetters(data){
        let element = document.getElementById(`basic_${fieldId}`);
        console.log(fieldId)
        if(fieldId === 'name'){
            valueName = valueName + data;
            element.value = valueName;
        }

        if(fieldId === 'mail'){
            valueMail = valueMail + data;
            element.value = valueMail;
        }

        if(fieldId === 'password'){
            valuePassword = valuePassword + data;
            element.value = valuePassword;
        }
    }

    function clearLetter(data){ 
        let element = document.getElementById(`basic_${fieldId}`);
        element.value = valueName.slice(0, -data);
    }

    function onChange(e){
        console.log('change ', e.target.value)
    }

    useEffect(() => {
        console.log('opa')   
    }, []);


    return(
        <div className="login">
            <h2>Faça o login para ter a melhor experiência</h2>

            <div className="content-login">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onSubmitCapture={() => {console.log('opaa')}}
                >
                    <Form.Item
                        id="name"
                        label="Nome"
                        name="name"
                        size="middle"
                        rules={[{ required: true, message: 'Por favor, informe seu nome!' }]}
                        onFocus={() => { fieldFocus('name')}}
                    >   
                        <Input className="navigation" />
                    </Form.Item>

                    <Form.Item
                        id="mail"
                        label="E-mail"
                        name="mail"
                        size="middle"
                        rules={[{ required: true, message: 'Por favor, informe seu e-mail!' }]}
                        onFocus={() => { fieldFocus('mail')}}
                    >
                        <Input className="navigation" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        size="middle"
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
                { visibleKeyboard &&
                    <Keyboard getLetters={getLetters} clearLetter={clearLetter} typeScreen="login" />
                }  
            </div>


        </div>
    )
}