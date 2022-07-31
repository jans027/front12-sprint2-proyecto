import React, { Component } from "react";
// import { Boton1 } from "../styles/Boton1";
import { Section } from "../styles/Section";
import { DivCard, Enlace1 } from "../styles/Styles1";
import { Textos1 } from "../styles/Textos1";
import { Link} from "react-router-dom";


export default class Pagina2 extends Component {


    render() {
        return (
            <Section>
                <DivCard>
                    <img src="https://i.ibb.co/FqhnptW/Svg.png" alt="Svg" border="0" />
                </DivCard>
                <Textos1>
                    <h2>Explore new courses</h2>
                    <p>
                        Study and watch all our new courses <br />
                        and there are many of them
                    </p>
                </Textos1>
                <Enlace1><Link to={`/Pagina3`}>Next</Link></Enlace1>
            </Section>
        );
    }
}
