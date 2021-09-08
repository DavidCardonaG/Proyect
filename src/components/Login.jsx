import React, { Component } from 'react'
import {Body} from '../styled/AppStyled'
import {Link} from 'react-router-dom'
import axios from 'axios';
import md5 from 'md5';
const Baseurl = ''

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
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
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
            <form className="form-signin" onSubmit={this.handleSutmit}>
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}
                    name= "username"
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    onChange={this.handleChange}
                    name= "password"
                />

                <button type="submit" className="Login" onclick={() => this.iniciarSesion}>Login</button>

                <div className="">
                    <p className="p-login">Login con social Network</p>
                     <button className="btnGoogle"><i class="fab fa-google">Inicia sesión con google</i></button>
                </div>
                  <Link to="" className="Link"> Create new account</Link>
            </form>
        </div>
        </Body>
        )
    }
}
