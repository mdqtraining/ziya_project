import React, { useState } from 'react';
import Chaticon from '../chatlogo.png'
import { UserOutlined } from '@ant-design/icons';
import { Slider } from './Slide';
import { Carousel, Col, Row, message } from 'antd';

export default function ChatMessage({ data, typedText, index, isLoading, messagesType, slideMessages }) {
    const onChange = ( currentSlide ) => {
        console.log(currentSlide);
      };
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const SlideContent = ({ dataset }) => {
        const slideItems = dataset.map((item) => (
            <>
                <h4 style={{ color: '#E6D9CD' }}>{data}</h4>
                <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                    {Object.entries(item).map(([key, value]) => (
                        <div key={key}>
                            <h4 style={{ color: '#F9F9F8' }}>{key}: </h4>
                            <h4 style={{ color: '#B1E6E4' }}>{value}</h4>
                        </div>
                    ))}
                </div>
                <h5 style={{ color: '#E6D9CD' }}>Please let me know if you would like more information about any of these positions or if you have any other questions."</h5>
            </>
        ));

        return (
            <Carousel afterChange={onChange}>
                {slideItems}
            </Carousel>
        );
    };


    const MainContent = ({ dataset }) => {
        return (
            <div>
                <h3 className="contentStyle">{dataset}</h3>
            </div>
        );
    };

    return (
        <div className="parrent-msg">
            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
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
                            {messagesType === 'slide' && slideMessages[currentIndex] ? (
                                <SlideContent dataset={slideMessages[currentIndex]} />
                            ) : (
                                <MainContent dataset={data} />
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}


