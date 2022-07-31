import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BotonReguistro } from '../styles/BotonReguistro'
import { Section } from '../styles/Section'
import { Enlace1 } from '../styles/Styles1'
import { Textos1 } from '../styles/Textos1'
import axios from 'axios'
import { ApiUrl } from '../services/apirest'

// sweat alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Form } from '../styles/Form'
const MySwal = withReactContent(Swal)




export default class SignUp extends Component {

    state = {
        form: {
            name: '',
            email: '',
            phone: '',
            password: '',
            coins: '0'
        }
    }

    // capturo los datos del ususraio en tiempo real
    userChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.form)
    }

    // valido que los campos no esten vacios de lo contrario envio a la funcion guardarUsuario
    validacion = async (e) => {
        e.preventDefault()
        let valido = true;
        if (this.state.form.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (this.state.form.email === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (this.state.form.phone === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (this.state.form.password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (valido) {
            this.guardarUsuario(this.state.form)
            MySwal.fire({
                title: <strong>Good job!</strong>,
                html: <i>Usuario creado correctamente</i>,
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    window.location.href = "/SignIn";
                } 
            })
        }
    }

    // envio los datos validos a la base de datos
    guardarUsuario = async () => {
        await axios.post(
            ApiUrl + "user",
            {
                name: this.state.form.name,
                email: this.state.form.email,
                phone: this.state.form.phone,
                password: this.state.form.password,
                coins: this.state.form.coins,
            })
            .then(response => {
                console.log('Exito')
            })

            .catch(error => {
                console.log('Eoooo')
                console.log(error);
            })

    }


    render() {
        return (
            <Section>
                <Form>
                <form onSubmit={this.validacion}>
                    <Textos1>
                        <h2>Create new Account</h2>
                        <p>
                            Create a new account by filling in all the
                            fields or log in to an existing account
                        </p>
                    </Textos1>
                    <input
                        name="name"
                        type="name"
                        placeholder="Name"
                        onChange={this.userChange}
                        required />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={this.userChange}
                        required />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        onChange={this.userChange}
                        required />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={this.userChange}
                        required />
                    <BotonReguistro>
                        <Enlace1>
                            <Link
                                type="submit"
                                onClick={this.validacion}
                                to={`/SignUp`}>Next
                            </Link>
                        </Enlace1>
                    </BotonReguistro>
                </form>
                </Form>
            </Section>
        )
    }
}
