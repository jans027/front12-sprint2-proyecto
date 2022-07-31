import React, { Component } from 'react';
import FanciNavBar from './FanciNavBar';
import axios from 'axios'
import { ApiUrl } from '../services/apirest'
import { Stack, Button, H2 } from '../styles/Test';



export default class Test extends Component {


    state = {
        cursos: []
    }

    componentDidMount() {
        axios.get(ApiUrl + "quiz")
            .then(res => {
                const cursos = res.data;
                this.setState({ cursos });
                // console.log(this.state.cursos)
            })
    }

    handleClick = (id,e) =>{
        console.log('boton  '+e)
        window.location = `/Test/${id}`;
    }


    render() {
        return (
            <div>
                <FanciNavBar />
                <H2>Topic quizzes</H2>
                <Stack>
                
                    {
                        this.state.cursos.map(item => (
                            <li>
                                <Button
                                size="large"
                                variant="outlined"
                                type='submit' 
                                key={item.id} 
                                onClick={(e) => this.handleClick(item.id, e)}>
                                    <span><img src={item.img} alt="" /></span>
                                    <div>{item.titulo} </div>
                                    <span>{item.duracion}</span> 
                                </Button>
                            </li>
                        ))
                    }
                </Stack>
            </div>
        );
    }
}
