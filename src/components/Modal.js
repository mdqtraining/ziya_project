import React from 'react';
import { EyeOutlined }from '@ant-design/icons';
import { Modal } from 'antd';

const { useState } = React;
function Slider () {
  const [btnClass, setBtnClass] = useState("blue-color");

  function toggleColor() {
    setBtnClass(btnClass === "blue-color" ? "orange-color" : "blue-color");
    setIsModalOpen(true);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleCancel = () => {
    setIsModalOpen(false);
    setBtnClass(btnClass === "blue-color" ? "orange-color" : "blue-color");

  };

  return (
    <div className="container">
      <button onClick={toggleColor}  className={`${btnClass}`}>
      <EyeOutlined />
      </button>
      {/* <Button onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
    
  );
}

export default Slider