import React, { Component } from 'react'
import Header from './Header'
import { ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';


export class Body_left extends Component {


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
                
            </div>
        )
    }
}

export default Body_left
