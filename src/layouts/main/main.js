import React, {Component} from 'react';
import Card from '../../components/card/card';
import Logo from '../../assets/logo.png';
import {Redirect} from 'react-router-dom';
import './main.css';


class Main extends Component {

    state = {
        title: "SISTEMA INTEGRAL DE LA INFORMACIÓN DEL DEPARTAMENTO DE CIENCIAS ECONÓMICO-ADMINISTRATIVAS",
        descripcion: "Esta página está diseñada para mostrar el perfil de los maestros del insituto tecnológico de Minatitlán"
    }
    render() {

        let main = this.props.isLogged ? (
            <div>
                <header className="header">
                    <h3>Catálogo De Docentes En El área
                        Económica Administrativa</h3>
                </header>
                <div className="home">
                    <div className="half">
                        <Card title={this.state.title} 
                        text={this.state.descripcion}
                        img={Logo} />
                    </div>
                </div>
            </div>
        ) : <Redirect to="/" />

        return main; 
    }
}


export default Main;