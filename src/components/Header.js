import React, { Component } from 'react'
import logovert from '../img/logon-vide.png'

export class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-header-div">
                    <div>
                        <img src={logovert} className='' alt='Logo édouard d halluin' />
                    </div>
                    <div>
                        <nav className="App-header-nav">
                            <ul>
                                <li><a href={`${process.env.PUBLIC_URL}/document/CVEdouardDH2020.pdf`} target="_blank">CV</a></li>
                                <li><a href="https://www.linkedin.com/in/edouarddhalluin/" target="_blank">Linkedin</a></li>
                                <li><a href="https://github.com/Edouard-dh" target="_blank">GitHub</a></li>
                                <li><a href="https://directory.opquast.com/fr/certificat/EXVORM/" target="_blank">Opquast</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}



export default Header
