import React from 'react';
import Chaticon from '../chatlogo.png'
import { UserOutlined } from '@ant-design/icons';
import { Slider } from './Slide';
import { Carousel } from 'antd';

export default function ChatMessage(props) {
    const onChange = ( currentSlide ) => {
        console.log(currentSlide);
      };
    return (
        <div className='parrent-msg'>
            {
                props.user ? (
                    <div className='message-right'>
                        <span className='message-text'>{props.message}</span>
                        <UserOutlined className='message-icon' />
                    </div>
                ) :
                    <div className='message-left'>
                        <img src={Chaticon} className='message-icon' width={50} />
                        {/* <span className='message-text msg-txt-left'>{props.message}</span> */ }
                        <div>
                        <Carousel afterChange={onChange}>

                            <div>
                                <h3 className=" contentStyle">{props.message}</h3>
                            </div>
                            <div>
                                <h3 className=" contentStyle">{props.message}</h3>
                            </div>
                        </Carousel>
                       </div>
                    </div>
            }
        </div>
    )

}