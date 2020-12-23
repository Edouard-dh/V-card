import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom';



export default class NotFound extends Component {


    render() {
        return (
            <div className="Page_not_found">
                <div className="Page_not_found_h1">
                    <h1>Erreur 404 </h1>

                </div>
                <div className="Page_not_found_link">
                    <Link to="/" > <Button type="primary"> Retour à la page d'acceuil</Button> </Link>

                </div>
            </div>
        )
    }
}