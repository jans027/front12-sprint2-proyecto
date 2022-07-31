import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { DivBotonForm, Form } from '../styles/Form'
import { Section } from '../styles/Section'
import { Textos1 } from '../styles/Textos1'

import axios from 'axios'
import { ApiUrl } from '../services/apirest'
// sweat alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export default class SignIn  extends Component {

    state={
        form:{
            phone:'',
            password:''
        }
    }

    handleChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        // console.log(this.state.form)
    }

    handleLogin = async(e) =>{
        e.preventDefault()
        
        await axios.get(
            ApiUrl + "user" ,
            {params:{
                phone: this.state.form.phone, 
                password: this.state.form.password 
            }   
            }
            )
            .then(response=>{
                return response.data
                // console.log(response.data)
                
            })
            .then(response=>{
                if(response.length === 1){
                    let usuario = response[0];
                    console.log(usuario)
                    sessionStorage.setItem('email',usuario.email);
                    sessionStorage.setItem('name',usuario.name);
                    sessionStorage.setItem('phone',usuario.phone);
                    sessionStorage.setItem('coins',usuario.coins);
                    sessionStorage.setItem('id',usuario.id);
                    MySwal.fire({
                        title: <strong>Good job!</strong>,
                        html: <i>Welcome Back</i>,
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location = "/Footer2";
                        } 
                    })
                }else{
                    MySwal.fire({
                        title: <strong>Oops...</strong>,
                        html: <i>Usuario o Clave Incorrecto</i>,
                        icon: 'error'
                    })
                }
            })
            .catch(e=>{
                console.log('Eoooo')
                console.log(e);
            })
    }

    render() {
        return (
            <Section>
                <Form >
                    <form>
                        <Textos1>
                            <h2>Welcome back</h2>
                            <p>
                                Sign in to an existing account using your phone number
                            </p>
                        </Textos1>
                        <input 
                        name="phone" 
                        type="tel" 
                        placeholder="+148910235" 
                        onChange={this.handleChange}
                        />
                        <input 
                        name="password" 
                        type="password" 
                        placeholder="password"
                        onChange={this.handleChange}
                        />
                        <DivBotonForm>
                            <button 
                                onClick={this.handleLogin}>
                                Login
                            </button>
                            <p>Don't have account ?<Link to={`/SignUp`}>Sign up</Link></p>
                        </DivBotonForm>
                    </form>
                </Form>
            </Section>
        )
    }
}
