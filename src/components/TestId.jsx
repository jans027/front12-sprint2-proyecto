
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiUrl } from '../services/apirest'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { Button1, Container1, DivBotones } from '../styles/TestId'
import { Button } from '../styles/Test';

const coins = sessionStorage.getItem('coins')

const TestId = () => {

    // .................Boton.................................
    const [isPink, setIsPink] = useState(false);


    // ..................contador.............................
    const [counter, setCounter] = useState(parseInt(coins))

    // .............Cargo Info test..........................
    const { id } = useParams()
    // console.log(typeof(coin))

    const [testId, setTestId] = useState([])
    const [opcionesId, setOpcionesId] = useState([]);
    const [points, setPoints] = useState([])
    const [pregunta, setPregunta] = useState([])




    useEffect(() => {
        const obtenerDatos = async () => {
            const respuesta = await axios.get(ApiUrl + `quiz/${id}`)
            const curso = await respuesta.data;
            setTestId(curso);
            setOpcionesId(curso.opciones)
            setPoints(curso.points)
            console.log(curso.opciones)
        }
        obtenerDatos()

    }, [id])


    const clickRespuesta = ((item, index) => {

        
        setPregunta(item)
        if (item.isCorrect === "true") {
            console.log('correcto  ' + index)
            console.log(points)

            setCounter(counter + parseInt(points))
            

        } else if (item.isCorrect !== "true") {
            console.log('Falso  ' + index)
            
        }
        return item
    })


    const clickCoins = () => {
        // console.log(pregunta)
        sessionStorage.setItem('coins', counter)
        if(pregunta.isCorrect === "true"){
            // console.log(pregunta.isCorrect+"     Sumaaaaaaaaaaaaaaaaaaa")
            window.location = "/TestCorrect";
        }else{
            // console.log(pregunta.isCorrect+"      Cerooooooooooooooo")
            window.location = "/TestIncorrect";
        }
    }


    return (
        <div>
            <Container1>
                <ReactPlayer
                    url={testId.video}
                    controls
                />
                <span>{testId.descripcion}</span>
                <DivBotones>
                    {
                        opcionesId.map((item, index) => (
                            <Button
                                isPink={isPink}
                                onClick={(e) => clickRespuesta(item, index) - setIsPink(!isPink)} 
                                >
                                <span>{index}</span>
                                <div>{item.textoRespuesta}</div>
                            </Button>
                        ))
                    }
                    <Button1 onClick={(e) => clickCoins()} size="large" variant="contained">Next</Button1>
                </DivBotones>
            </Container1>
        </div>
    )
}

export default TestId