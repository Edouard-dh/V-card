import React, { Component } from 'react'
import ed from '../img/ed2.png'
import tea from '../img/tea2.jpeg'
import About_me from './About_me_modal'


export class Body_right extends Component {


    state = {
        size: 'large',
    };


    render() {
        const { size } = this.state;

        return (

            <section className="App-body-right">
                <div className="App-body-right-div">
                    <div className="App-body-right-div-img-one" >
                        <img src={ed} alt=' édouard d halluin' />
                    </div>
                </div>

                <div className="App-body-right-div-two">
                    <div className="App-body-right-div-img-two">
                        <img src={tea} alt='Image d une boule de thé' />
                    </div>
                    <div className="App-body-right-div-text">
                        <h2>À propos</h2>
                        <p>
                            Se présenter en quelques lignes n'est pas chose aisée, c'est pourquoi je vous propose ici d'avoir une vue plus détaillée de mes formations, des langages que j'utilise ou encore du parcours qui m'a mené jusqu'ici.
                        </p>

                        <a href="#"><About_me /></a>
                    </div>

                </div>
            </section>

        )
    }
}

export default Body_right
