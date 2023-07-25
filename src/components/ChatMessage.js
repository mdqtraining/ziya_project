import React from 'react';
import Chaticon from '../chatlogo.png'
import { UserOutlined } from '@ant-design/icons';
import { Slider } from './Slide';
import { Carousel } from 'antd';
import { Spin } from 'antd';
import { Col, Row } from 'antd';

export default function ChatMessage({ data, typedText, index, isloading }) {
    const onChange = ( currentSlide ) => {
        console.log(currentSlide);
      };
    return (   
        <div className="parrent-msg message-text">
            <Row>
            <Col span={24} style={{textAlign:'right'}}>
            <div className="message-right">
                <span className="message-text">{typedText[index]?.text}</span>
                <UserOutlined className="message-icon" />
            </div>
            </Col>
            </Row>

            <Row>
            <Col span={24}>
            <div className="message-left">
                <img src={Chaticon} className="message-icon" width={50} />
                <div className="fullcarousel">
                    <Carousel afterChange={onChange}>
                        <div>
                        <h3 className="contentStyle">{isloading?<Spin />: data}</h3>
                        </div> 
                    </Carousel>
                </div>
            </div>
            </Col>
            </Row>
        </div>
        
    );
}