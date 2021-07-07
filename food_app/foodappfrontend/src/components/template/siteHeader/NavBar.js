import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/#">Menu Inteligente</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <NavLink  to='menu' >Menu</NavLink>
                        
                        <NavLink  to='myMenus' >Menu</NavLink>

                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Mis Menus <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Usuario</a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/#">Cuenta</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/#">Cerrar sesion</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}