import React, { useState } from 'react';
import { Modal, Button } from 'antd';




const About_me = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className="Button-ant-design" onClick={() => setVisible(true)} >
        En savoir plus
      </Button>
      <Modal
        title="À propos."
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width="50%"
        height="70%"
        className="About_me"
        bodyStyle={{height:"50vh"}} 
      >
        <p>Work in progress</p>
        <p>Work in progress</p>
        <p>Work in progress</p>
      </Modal>
    </>
  );
};

export default About_me
