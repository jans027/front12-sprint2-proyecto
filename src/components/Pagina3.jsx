import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../styles/Section'
import { DivCard, Enlace1 } from '../styles/Styles1'
import { Textos1 } from '../styles/Textos1'





export default class Pagina3 extends Component {
    render() {
        return (
            <Section>
                <DivCard>
                    <img src="https://i.ibb.co/9qp321h/Svg-1.png" alt="Svg-1" border="0"/>
                </DivCard>
                <Textos1>
                    <h2>See your goals</h2>
                    <p>
                        Learn and learn new things every <br />
                        day and get rewards be on top
                    </p>
                </Textos1>
                <Enlace1><Link to={`/Pagina4`}>Next</Link></Enlace1>
            </Section>
        )
    }
}
