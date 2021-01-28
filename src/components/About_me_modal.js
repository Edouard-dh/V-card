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
        width="90%"
        height= "auto"
        className="About_me"
        bodyStyle={{height:"auto"}} 
      >
        <p>Bonjour je m'appelle Édouard D'halluin j'ai 32 ans et je suis développeur web full-stack.</p>
        <p> Afin de pouvoir mieux se connaître je vais vous expliquer quelles sont mes experiences passées et comment j'en suis arrivé ici.</p>
        <p>Enfant j'ai toujours voulus  être boulanger/ pâtissier soit de travailler dans le Web. En classe de troisième lors d'un conseil de classe l'un de mes professeurs m'a dit que je n'avais pas les capacitées pour être pâtissier.</p>
        <p>"Piqué au vif" et sachant en être capable,j'ai décidé de me lancer corps et âme dans cette aventure.</p>
        <p>5 ans plus tard avec 3 diplômes en poches j'ai réussi mon défi et commençais à exercer ce métier avec passion.</p>
        <p>Malheurseusement deux ans plus tard, on me découvrit une forte intolérence au lactose ainsiqu'aux farines ce qui mit fin à cette avaenture.</p>
        <p>C'est avec joie qu'à mes 24 ans je me décidais de changer de métier pour devenir boucher.</p>
        <p>Les années passant, mon nouveau métier était une fiertée, mais mon corps me lança  (encore) une alerte et m'envoya faire un détour par la case hopital. De plus, travailler six jours sur sept commençait à peser sur ma vie de couple,donc je me suis mis à chercher vers où me réorienter.</p>
        <p>Ma compagne ayant subit un licenciment économique, j'ai pris la décision de profiter de cette mésaventure pour me lancer dans un défi de taille. C'est ainsi qu'à la veille de mes 30 ans je me suis décidé de devenir dev web full stack.</p>
        <p>Après un début d'auto-formation et un stage d'un mois chez Leroy-Merlin, j'ai eu la chance d'intégrer l'Ineat Academy puis de signer chez Ineat. Malheureuseusement cette période de pandémie m'empêcha de valider ma période d'essai.</p>
        <p>Malgré cet événement ma détérmination ne changea pas. J'ai continué mon autoformation en passant ma Certification Oquast tout en reprenant mon site web afin de l'améliorer (https://la-taverne.edouard-dhalluin.fr/). Enfin en Novembre où  j'eu la chance d'intégrer M2i Formation afin de continuer à en apprendre encore et toujours plus sur le métier.</p> 
        <p>Et c'est ainsi que continue à s'écrire cette formidable histoire.</p>
      </Modal>
    </>
  );
};

export default About_me
