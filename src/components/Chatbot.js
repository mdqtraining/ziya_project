import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { Input } from 'antd';
import Modal from './Modal'

import { Col, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import clogo from '../images/chatlogo.png' 
import { analyze } from './utils';


export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
            message: "Hi I'm Ziya, How can I assist you today? If you have any questions or need help with anything, feel free to ask your queries",
        },
    ]);

    const [text, setText] = useState('');

    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            const reply = analyze(text)
            list = [
                ...messages,
                { message: reply }
            ]
        }
        // else {
        //     list = [
        //         ...list,
        //         {
        //             message: 'Hello!, '
        //         },
              
        //     ]
        // }
        setMessages(list)
        setText("")
        setTimeout(() => {
            document.querySelector('#copyright').scrollIntoView();
        }, 1);
    };
    return (
        <div className='connect'>
            <Row>
            <Col span={6} style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div className='logo-head'>
                <img src={clogo} alt='...' width="60" />
                <h4>Ziya</h4>
            </div>
            </Col>
            <Col span={18} style={{ display:'flex', alignItems:'center'}}>
                <div>
                <h3 className='con-text'>Connecting Talents with Opportunities</h3>
                </div>
            </Col>
            </Row>
            <div className='chat-message'>
                {
                    messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)
                  
                } 
                 {/* <Slider /> */}
            </div>

            <Row className='tex-bar'>
                <Col span={12} offset={6} className='text-bar' id="copyright">
                    <Modal />
                    {/* <div className='text-bar' id='copyright'> */}
                    <Input className='input-bar' placeholder="Hi, How can i assist you?(Write here)" value={text} onChange={(e) => setText(e.target.value)} />
                    <button className='send-btn' onClick={onSend}><SendOutlined style={{ color: 'black' }} /></button>
                    {/* </div> */}
                </Col>
            </Row>
        </div>
    )
}