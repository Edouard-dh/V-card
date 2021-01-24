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
        <p>Bonjour, je m'appelle Édouard D'Halluin je suis développeur web full stack.</p>
        <p>Aujourd'hui je vous propose ma recette pour un bon thé </p>
        <p>Pour commencer prenez une base de passion , ajouter des beaux morceaux de Préseverance enfin pour avoir un peu de pétillance ajouter des lamelles de Jovialité.</p>
        <p>Une fois le mélange fait mettez le tout dans une longue boule thè d'1m88, laissez infusez le tout 10 ans dans les métièrs de bouche. Pour que tout les armôes se libère il est conseillé de le mangé avec une gauffrette dunkerquoise</p>
      </Modal>
    </>
  );
};

export default About_me
