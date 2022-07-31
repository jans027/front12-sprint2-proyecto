import axios from 'axios'
import React, { Component } from 'react'

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import { Back, InputProfile } from '../styles/Profile';
import { NavLink } from 'react-router-dom'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



import { ApiUrl } from '../services/apirest'
import { PrincipalProfile } from '../styles/Profile'
// const MySwal = withReactContent(Swal)



// const  id   = sessionStorage.getItem("id");
const name = sessionStorage.getItem("name");
const email = sessionStorage.getItem("email");
const phone = sessionStorage.getItem("phone");



export default class Profile extends Component {

    state = {
        form: {
            name: ''
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

    handleSubmit = async (e) => {
        e.preventDefault();

        const id = sessionStorage.getItem("id");
        // console.log(id)
        const url = ApiUrl + "user?id=" + id
        await axios.patch(url, this.state)
    }


    render() {
        return (
            <PrincipalProfile>
                <Back>
                    <NavLink to="/Footer2"><ArrowBackIcon /></NavLink>
                    <span>Account settings</span>
                </Back>
                <section>
                    <form>
                        <form>
                            <InputProfile>
                                <span><PersonOutlineOutlinedIcon sx={{ fontSize: 40 }} /></span>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder={name}
                                    onChange={this.handleChange}
                                />
                                <button
                                    // type="submit"
                                    onClick={this.handleSubmit}
                                ><ModeEditOutlineOutlinedIcon sx={{ fontSize: 40 }} />
                                </button>
                            </InputProfile>

                            <InputProfile>
                                <span><EmailOutlinedIcon sx={{ fontSize: 40 }} /></span>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder={email}
                                    onChange={this.handleChange}
                                />
                                <button
                                    // type="submit"
                                    onClick={this.handleSubmit}
                                ><ModeEditOutlineOutlinedIcon sx={{ fontSize: 40 }} />
                                </button>
                            </InputProfile>

                            <InputProfile>
                                <span><LocalPhoneOutlinedIcon sx={{ fontSize: 40 }} /></span>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder={phone}
                                    onChange={this.handleChange}
                                />
                                <button
                                    // type="submit"
                                    onClick={this.handleSubmit}
                                ><ModeEditOutlineOutlinedIcon sx={{ fontSize: 40 }} />
                                </button>
                            </InputProfile>

                        </form>
                    </form>
                </section>
            </PrincipalProfile>
        )
    }
}
