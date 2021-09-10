import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        SERVER BLOCK-MASTER
                    </Link>
                    <Link 
                     className="navbar-brand"
                     to="/"
                    >
                    <img 
                        src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631140173/logo-blockBuster_saqw82.png" 
                        id="icon" 
                        alt="User Icon" 
                        width="100px"/>
                    </Link>

                    <div className="navbar-collapse">
                        <div className="navbar-nav">

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/Peliculas"
                            >
                                Peliculas
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                                Series
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                                Buscar
                            </NavLink>
                        </div>
                    </div>


                </nav>
            </div>
        )
    }
}
