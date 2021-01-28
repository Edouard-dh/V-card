import React, { Component } from 'react'
import Header from './Header'
import { ArrowDownOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import{Link } from 'react-router-dom'

export class Body_left extends Component {


    state = {
        size: 'large',
    };

    render() {
        const { size } = this.state;

        return (

            <section className="App-body-left">
                <Header />
                <section className="App-body-left-off-header" >
                    <h1>édouard d'halluin</h1>
                    <h2>développeur web full stack</h2>
                    <p>
                        Bonjour, je m'appelle Édouard D'Halluin je suis développeur web full stack.
                        </p>
                    <p>Aujourd'hui je vous propose ma recette pour un bon thé alors préparez vos tasses, échauffez vos papilles gustatives et laissez-moi vous présenter ce sympathique mélange.
                        </p>
                    <p>Pour commencer prenez une base de passion pour avoir de la rondeur, ajoutez de beaux morceaux de persévérance pour avoir de l’onctuosité, étoffez le tout avec de belles lamelles de jovialité pour embellir l’ensemble enfin pour avoir un peu d’acidité ajouter une petite pointe de créativité.
                    </p>
                    <p>
                    Une fois le mélange fait mettez le tout dans une longue boule à thé d'1m88, laissez-le infuser 10 ans dans les métiers de bouche à 59 °C. Pour que tous les arômes se libèrent, il est conseillé de le manger avec une gaufrette dunkerquoise, mais il se marie tout aussi bien avec n’importe qu’elle autre sucrerie.
                    </p>

                </section>
                <div>
                    <p>
                    Pour avoir un aperçu de mes travaux cliquez sur la flèche juste en dessous pour arriver sur mon portefolio.
                    </p>
                </div>
                <div className="button_bosdy_left">
                    <Link to="/portfolio" >
                        <Button className="Button-ant-design" shape="circle" icon={<ArrowDownOutlined />} size={size}  />
                    </Link>
                </div>
            </section>


        )
    }
}

export default Body_left
