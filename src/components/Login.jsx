import React, { Component } from 'react'
import {Body} from '../styled/AppStyled'
import {Link} from 'react-router-dom'
import axios from 'axios';
import md5 from 'md5';
const Baseurl = 'http://login-apikey.herokuapp.com/usuario'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            form:{
                username:'',
                password:''
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form) 
    }
    iniciarSesion = async () => {
        await axios.get(Baseurl, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_principal}`);
                } else {
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    handleSutmit =(e) => {
        e.preventDefault();
    }
    render() {
        return (
            <Body>
            <div>
                <h1>BIENVENIDO</h1>
            <form className="" onSubmit={this.handleSutmit}>
                <h1>
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}
                    name= "username"
                />

                <input
                    type="Password"
                    id="inputPassword"
                    placeholder="Contraseña"
                    required=""
                    onChange={this.handleChange}
                    name= "password"
                />

                <button type="submit" className="Login" onClick={() => this.iniciarSesion}>Login</button>

                <div className="">
                    <p className="p-login">Login con social Network</p>
                     <button className="btnGoogle"><i class="fab fa-google">Inicia sesión con google</i></button>
                </div>
                  <Link to="/registro" className="Link"> Create new account</Link>
            </form>
        </div>
        </Body>
        )
    }
}
