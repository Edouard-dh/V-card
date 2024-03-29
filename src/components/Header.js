import React, { Component } from 'react'
import logovert from '../img/logon-vide.png'
import{Link } from 'react-router-dom'
import {GithubOutlined, LinkedinOutlined,FileMarkdownOutlined  } from '@ant-design/icons';

export class Header extends Component {
    render() {

        return (
            <header className="App-header">
                <div className="App-header-div">
                    <Link to="/"> 
                        <img src={logovert} className='' alt='Logo édouard d halluin' />
                    </Link>
                    <div id="outer-container"> 
                       
                         <nav className="App-header-nav">
                            <ul>
                                
                                <li>
                                <Link to="/portfolio" ><img 
                                    className='header-portfolio' src={`${process.env.PUBLIC_URL}/img/portfolio.png`} alt="image du portfolio"/>
                                </Link>
                                </li>
                            </ul>
                        </nav> 
                    </div>
                </div>
            </header>
        )
    }
}



export default Header
