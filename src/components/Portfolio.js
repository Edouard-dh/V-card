import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Projet } from './Projet'
import data from './data'
import '../scss/main.scss';
import Header from './Header'




export default class Portfolio extends Component {
    render() {
        const projetList = data.map(item => {
            return (
                <Projet
                    key={item.id}
                    name={item.name}
                    text={item.text}
                    image={item.image}
                    url={item.url}
                />
            )
        })
        return (
            <div>
                <Header />

                <section className="App-portefolio">
                    <Carousel autoplay >
                        {projetList}
                    </Carousel >
                </section>
            </div>
        )
    }
}

