import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../styles/Section'
import { DivCard, Enlace1 } from '../styles/Styles1'
import { Textos1 } from '../styles/Textos1'




export default class Pagina4 extends Component {
    render() {
        return (
            <Section>
                <DivCard>
                <img src="https://i.ibb.co/rxPX2YR/Svg-2.png" alt="Svg-2" border="0"/>
                </DivCard>
                <Textos1>
                    <h2>Move on to the next course</h2>
                    <p>
                        Don't stop at one, start learning the next<br />
                        and make progress.
                    </p>
                </Textos1>
                <Enlace1><Link to={`/SignIn`}>Next</Link></Enlace1>
            </Section>
        )
    }
}
