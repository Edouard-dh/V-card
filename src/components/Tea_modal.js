import React, { useState } from 'react';
import { Modal, Button } from 'antd';




const Tea_modal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className="Button-ant-design" onClick={() => setVisible(true)} >
        En savoir plus
      </Button>
      <Modal
        title="Parlons peu, parlons thé."
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width="100%"
        height="100vh"
        className="Tea_modal"
        bodyStyle={{height:"80vh"}} 
      >
        <p>Work in progress</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default Tea_modal
