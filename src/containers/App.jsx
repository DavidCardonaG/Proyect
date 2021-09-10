import React, { Component } from 'react'
import Login from '../components/Login'
import Registro from '../components/Registro'
import Navbar from '../components/Navbar'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Login/>
                <Registro/>
            </div>
        )
    }
}
