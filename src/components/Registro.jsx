import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import md5 from 'md5';
import uuid  from 'react-uuid';
import {Title,IMG,H3,Contai,LINK} from '../styled/AppStyled'

const Baseurl = 'http://login-apikey.herokuapp.com/usuario'
export default class Registro extends Component {

    constructor() {
      super();
      this.state = {
          data:[],
          form:{
              id:'',
              name:'',
              apellido_principal:'',
              apellido_secundario:'',
              nombre:'',
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
    handleSutmit = (e) => {
        e.preventDefault();
    }
    RegistroUsuario = async () => {
        await axios.post(Baseurl, {
          id: uuid,
          apellido_principal: this.state.form.apellido_principal,
          apellido_secundario: this.state.form.apellido_secundario,
          nombre: this.state.form.nombre,
          username: this.state.form.username,
          password: md5(this.state.form.password)
        }).then(response => {
          alert('Usuario Registrado')
        }).catch(error => {
          console.log(error.message);
        })
      }
    render() {
        return (
            <div className="Registro py-5 container text-center">
                <form className="form-signin" onSubmit={this.handleSutmit}>
                    <Title className="title-registro">
                        ¡REGISTRATE EN NUESTRA APP BLOCK MASTER!
                    </Title>
                    <div className="fadeIn first ">
                        <IMG
                        src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631140173/logo-blockBuster_saqw82.png" 
                        id="icon" 
                        alt="User Icon" />
                        <H3>CREA UNA CUENTA</H3>
                    </div>
                    <Contai>
                    <input
                        type="text"
                        placeholder="Primer Apellido"
                        name="apellido_principal"
                        className="form-control"
                        autoComplete="off"
                        onChange={this.handleChange}
                        required=''

                    />

                    <input
                        type="text"
                        placeholder="Secundo Apellido"
                        name="apellido_secundario"
                        className="form-control"
                        autoComplete="off"
                        onChange={this.handleChange}
                        required=""

                    />

                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={this.handleChange}
                        required=""

                    />

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={this.handleChange}
                        required=""

                    />

                    <input
                        type="Password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleChange}
                        required=""

                    />
                    </Contai>
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-1"
                        onClick={() => this.RegistroUsuario}
                    >
                        Register
                    </button>
                    <br />
                   <LINK> <Link to="" className="Link"> ¿YA ESTAS REGISTRADO?</Link></LINK>
                </form>
            </div>
        )
    }
}
