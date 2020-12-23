import React, { Component } from 'react'
import logovert from '../img/logon-vide.png'
import {GithubOutlined, LinkedinOutlined,FileMarkdownOutlined  } from '@ant-design/icons';

export class Header extends Component {
    render() {

        return (
            <header className="App-header">
                <div className="App-header-div">
                    <div>
                        <img src={logovert} className='' alt='Logo édouard d halluin' />
                    </div>
                    <div id="outer-container"> 
                       
                         <nav className="App-header-nav">
                            <ul>
                                <li><a href={`${process.env.PUBLIC_URL}/document/CVEdouardDH2020.pdf`} target="_blank" >  <FileMarkdownOutlined />CV</a></li>
                                <li><a href="https://www.linkedin.com/in/edouarddhalluin/"  target="_blank" > <LinkedinOutlined/></a></li>
                                <li><a href="https://github.com/Edouard-dh" target="_blank" > <GithubOutlined /></a></li>
                            </ul>
                        </nav> 
                    </div>
                </div>
            </header>
        )
    }
}



export default Header
