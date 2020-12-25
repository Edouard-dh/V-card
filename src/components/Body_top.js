import React, { Component } from 'react'
import ed from '../img/ed2.png'
import tea from '../img/tea2.jpeg'
import Header from './Header'
import { ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Tea_modal from './Tea_modal'
import About_me from'./About_me_modal'


export class Body_top extends Component {


    state = {
        size: 'large',
    };


    render() {
        const { size } = this.state;
        
        return (
            <div className="App-body-top">
                <section className="App-body-left">
                    <Header />
                    <section className="App-body-left-off-header" >
                        <h1>édouard d'halluin</h1>
                        <h2>développeur web full stack</h2>
                        <p>
                            Bonjour, je m'appelle Édouard D'Halluin je suis développeur web full stack.
                        </p>
                        <p>Passionné, au quotidien je me lève avec le sourire quand je vais travailler toujours accompagné de ma fidèle tasse de thé. Persévérant, les défis ne me font pas peur, se sont grâce à eux que l'on grandit. Jovial,j'apprécie travailer en équipe et pouvoir partager mon savoir, ainsi qu'écouter les conseils de mes paires le tout dans la bonne humeur.
                        </p>
                        <p>
                            Durant mes formations, j'ai été amener à mettre en pratique les enseignements que l'on m'a donnés lors de travaux pratiques. Pour continuer mon apprentissage j'ai décidé de reprendre certains d'entres-eux en y ajoutant ma touche personnelle, et en les retravaillant avec les dèrnières méthodes apprises.
                        </p>
                        <p>
                            Pour avoir un apreçu de mes travaux cliquez sur la flèche juste en dessous (Work in progress)
                        </p>

                    </section>
                    <a>
                        <Button className="Button-ant-design" shape="circle" icon={<ArrowDownOutlined />} size={size} />
                    </a>
                </section>
                <section className="App-body-middle">
                    <div className="App-body-middle-div">
                        <div className="App-body-middle-div-img" >
                            <img src={ed} alt=' édouard d halluin' />
                        </div>
                        <div className="App-body-middle-div-text">
                            <h2>À propos</h2>
                            <p>
                                Se présenter en quelques lignes n'est pas chose aisée, c'est pourquoi je vous propose ici d'avoir une vue plus détaillée de mes formations, des langages que j'utilise ou encore de mon parcours qui m'a mené jusqu'ici. 
                            </p>
                            
                            <a href="#"><About_me/></a>
                        </div>
                    </div>
                    <div className="App-body-middle-div App-body-middle-div_two">
                        <div className="App-body-middle-div-img">
                            <img src={tea} alt='Image d une boule de thé' />
                        </div>
                        <div className="App-body-middle-div-text">
                            <h2>Parlons peu, parlons thé </h2>
                            <p>Mais pourquoi parler de thé sur sa présentation?</p>
                            <p>
                                Quel est le rapport entre le thé et le développement web?
                            </p>
                            <p> Pour en savoir plus, je vous propose de cliquer sur le lien jsute en-dessous afin d'avoir des réponses à vos questions.
                            </p>
                            
                            <a href="#"><Tea_modal/></a>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Body_top
