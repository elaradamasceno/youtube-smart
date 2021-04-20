import React, { useState, useEffect } from 'react';
import { Form, Input, Button} from 'antd';

import { Keyboard } from  '../components/Keyboard';

import ImageLogin from '../images/img-login.png';
import '../styles/components/Login.css';

export function Login(){
    const [ visibleKeyboard, setVisibleKeyboard ] = useState(false);
    const [ fieldId, setFieldId] = useState('');
    const [ username, setUserName ] = useState('');
    let valueName = '';

    function fieldFocus(id){
        setFieldId(id);
        setVisibleKeyboard(true);
    }

    function getLetters(data){
        let element = document.getElementById(`basic_${fieldId}`);
        let val = element.value;
        let pos = element.selectionStart;
        element.value = val.substr(0, pos) + data + val.substr(pos);
        valueName = element.value;
    }

    function clearLetter(data){ 
        let element = document.getElementById(`basic_${fieldId}`);
        element.value = valueName.slice(0, -data);
    }

    return(
        <div className="login">
            <h2>Faça o login para ter a melhor experiência</h2>

            <div className="content-login">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        id="name"
                        label="Nome"
                        name="name"
                        size="middle"
                        rules={[{ required: true, message: 'Por favor, informe seu nome!' }]}
                        onFocus={() => { fieldFocus('name')}}
                    >   
                        <Input />
                    </Form.Item>

                    <Form.Item
                        id="mail"
                        label="E-mail"
                        name="mail"
                        size="middle"
                        rules={[{ required: true, message: 'Por favor, informe seu e-mail!' }]}
                        onFocus={() => { fieldFocus('mail')}}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        size="middle"
                        rules={[{ required: true, message: 'Por favor, informe sua senha' }]}
                        onFocus={() => { fieldFocus('password')}}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
                { visibleKeyboard &&
                    <Keyboard getLetters={getLetters} clearLetter={clearLetter} />
                }  
            </div>


        </div>
    )
}