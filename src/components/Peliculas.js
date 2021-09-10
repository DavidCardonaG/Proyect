import axios from 'axios'
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import {fileUpload} from '../helpers/fileUpload';

const url = 'https://maestrogeekapp.herokuapp.com/data/'

export default class Peliculas extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            modalInsertar: false,
            modalEliminar: false,
            form: {
                id: '',
                nombre: '',
                director: '',
                descripcion: '',
                duracion: '',
                imagen: ''
            },
            tipoModal: ''
        }
    }

    componentDidMount(){
        this.peticionGet();
    }

    modalInsertar = () => {
        this.setState({modalInsertar: !this.state.modalInsertar})
    }

    handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    // handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     fileUpload(file)
    //     .then(response => {
    //         document.getElementById('image').value = response;
    //     }).catch(error => {
    //         console.log(error.message)
    //     })
    // }

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    SeleccionarPelicula = (block) => {

         this.setState({
             tipoModal: 'actualizar',
             form: {
                id: block.id,
                nombre: block.nombre,
                director: block.director,
                descripcion: block.descripcion,
                duracion: block.duracion,
                imagen: block.imagen
             }
         })
         console.log(block)
    }

    peticionGet=()=>{
        axios.get(url)
        .then(response => {
            this.setState({data: response.data})
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    peticionesPost = async () => {
        delete this.state.form.id;
        await axios.post(url,this.state.form)
        .then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
             console.log(error.message);
        })
    }
   
    peticionPut = async () => {
        await axios.put(url+this.state.form.id,this.state.form)
        .then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionDelete = async () => {
        await axios.delete(url+this.state.form.id)
        .then(response => {
            this.setState({modalEliminar:false});
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    render() {
        const {form} = this.state;
        return (
            <div className="container">
                <br />
                <button className="btn btn-dark"
                onClick={() => {this.setState({form: null, tipoModal: 'insertar'});this.modalInsertar()}}
                >Módulo Server blockmaster</button>
                <br /> <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Director</th>
                            <th>Descripcion</th>
                            <th>Duracion</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(block => {
                                return(
                                    <tr key={block.id}>
                                        <td>{block.id}</td>
                                        <td>{block.nombre}</td>
                                        <td>{block.director}</td>
                                        <td>{block.duracion}</td>
                                        <td>{block.descripcion}</td>
                                        <td><img src={block.imagen} width="60px" height="70px" alt=""/></td>
                                        <button className="btn btn-primary"
                                         onClick={() => {this.SeleccionarPelicula(block); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                         {" "}
                                         <button className="btn btn-danger"
                                         onClick={() => {this.SeleccionarPelicula(block); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>

                <Modal isOpen={this.state.modalInsertar}>
                    <h1>INGRESAR PELICULA</h1>
                    <ModalHeader style={{display: 'block'}}>
                    <button className="btn btn-danger"
                         onClick={() => this.modalInsertar()}
                           >X </button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id:''}/>
                            <br/>
                            <br/>
                            <label htmlFor="nombres">Nombre</label>
                            <input className="form-control" type="text" name="nombres" id="nombres" onChange={this.handleChange} value={form?form.nombre:''}/>
                            <br/>
                            <label htmlFor="apellidos">Director</label>
                            <input className="form-control" type="text" name="apellidos" id="apellidos" onChange={this.handleChange} value={form?form.director:''}/>
                            <br/>
                            <label htmlFor="telefono">Duracion</label>
                            <input className="form-control" type="text" name="telefono" id="telefono" onChange={this.handleChange} value={form?form.duracion:''}/>
                            <br/>
                            <label htmlFor="celular">Descripcion</label>
                            <input className="form-control" type="text" name="celular" id="celular" onChange={this.handleChange} value={form?form.descripcion:''}/>
                            <br/>
                            <br/>
                            <input 
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{display: 'none'}}
                            onChange={this.handleFileChange}
                            />

                            <button className="btn btn-success"
                            onClick={() => this.handlePictureClick()}
                            >Imagen</button>

                            <input 
                            type="text"
                            name="imagen"
                            id="image"
                            value={form?form.imagen:''}
                            onBlur={this.handleChange}
                            />

                        </div>

                    </ModalBody>
                    <ModalFooter>
                       {this.state.tipoModal==='insertar'}
                        <button className="btn btn-success"
                        onClick={() => this.peticionesPost()}>
                            Insertar
                        </button>
                        <button className="btn btn-primary"
                        onClick={() => this.peticionPut()}>
                            Actualizar
                        </button>
                        <button className="btn btn-danger"
                         onClick={() => this.modalInsertar()}
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Está seguro de eliminar la pelicula {form && form.nombre}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                       onClick={() => this.peticionDelete()}>Sí</button>
                        <button className="btn btn-secundary"
                       onClick={() => this.setState({modalEliminar:false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
