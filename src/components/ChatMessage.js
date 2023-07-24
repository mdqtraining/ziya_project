import React from 'react';
import Chaticon from '../chatlogo.png'
import { UserOutlined } from '@ant-design/icons';
import { Slider } from './Slide';
import { Carousel } from 'antd';

export default function ChatMessage({ data, typedText }) {
    const onChange = ( currentSlide ) => {
        console.log(currentSlide);
      };
    return (
        <div className="parent-msg">

            <div className="message-right">
            <span className="message-text">{typedText}</span>
            <UserOutlined className="message-icon" />
            </div>

            <div className="message-left">
            <img src={Chaticon} className="message-icon" width={50} />
            <div className="fullcarousel">
            <Carousel afterChange={onChange}>
            <div>
            <h3 className="contentStyle">{data}</h3>
            </div>
            </Carousel>
            </div>
            </div>
        </div>
    );
}