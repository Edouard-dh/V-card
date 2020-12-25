import React, { Component } from 'react'
import ed from '../img/ed2.png'
import tea from '../img/tea2.jpeg'
import About_me from'./About_me_modal'


export class Body_right extends Component {


    state = {
        size: 'large',
    };


    render() {
        const { size } = this.state;
        
        return (
            <div className="App-body-top">    
                <section className="App-body-middle">
                    <div className="App-body-middle-div">
                        <div className="App-body-middle-div-img" >
                            <img src={ed} alt=' édouard d halluin' />
                        </div>
                        
                    </div>
                    <div className="App-body-middle-div App-body-middle-div_two">
                    <div className="App-body-middle-div-text">
                            <h2>À propos</h2>
                            <p>
                                Se présenter en quelques lignes n'est pas chose aisée, c'est pourquoi je vous propose ici d'avoir une vue plus détaillée de mes formations, des langages que j'utilise ou encore de mon parcours qui m'a mené jusqu'ici. 
                            </p>
                            
                            <a href="#"><About_me/></a>
                        </div>
                        <div className="App-body-middle-div-img">
                            <img src={tea} alt='Image d une boule de thé' />
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default Body_right
