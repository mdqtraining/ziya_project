import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { Input, Spin } from 'antd';
import Modal from './Modal'

import { Col, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import clogo from '../images/chatlogo.png' 
import { analyze } from './utils';
import axios from 'axios';


export default function Chatbot() {
    const [messages, setMessage] = useState([]);
    const [text, setText] = useState('');
    const [typedTexts , setTypedTexts] = useState([]);
    const [isloading , setIsloading] = useState(false);


   
    const onSend = () => {
        setTypedTexts((prevTypedTexts) => [...prevTypedTexts,  {text}]);
        const sendData = new FormData();
        sendData.append('Body', JSON.stringify(text))
                axios({
                    method: 'POST',
                    url:`https://ziya.noww.in/ai/chatgpt.php?`,
                    data: sendData,
                })
                    .then((res) => {
                        if (res.data.error) {
                            setMessage(res.data.message);
                        } else {
                            // setMessage(res.data.message);
                     
                            setMessage([...messages, res.data.response]);
                            setText("")
                            setTimeout(() => {
                                document.querySelector('#copyright').scrollIntoView();
                            }, 1);
                            setIsloading(true);
                          }
                         })
                        .catch((err) => {
                         alert("Oops something went wrong " + err);
                        });
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
                {messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage
                            key={index}
                            data={data}
                            typedText={typedTexts}
                            index={index}
                            isloading={isloading}
                        />
                    ))}
                 {/* <Slider /> */}
            </div>

            <Row className='tex-bar'>
                <Col span={12} offset={6} className='text-bar' id="copyright">
                    <Modal />
                    {/* <div className='text-bar' id='copyright'> */}
                    <Input className='input-bar' placeholder="Send a Message..." value={text} onChange={(e) => setText(e.target.value)} />
                    <button className='send-btn' onClick={onSend}><SendOutlined style={{ color: 'black' }} /></button>
                    {/* </div> */}
                </Col>
            </Row>
        </div>
    )
}