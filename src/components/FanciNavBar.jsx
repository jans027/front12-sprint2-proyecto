import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Div1, Section1 } from "../styles/HomePage";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const usuario = sessionStorage.getItem("name");
const coins = sessionStorage.getItem("coins");



const FanciNavBar = () => {
    

    return (
        <Section1>
            <div>
                <h2>Hi, {usuario}</h2>
                <p>Let's start learning</p>
            </div>
            <Div1>
                <span>
                    <MonetizationOnIcon sx={{ fontSize: 25 }}/>
                </span>
                <p>{coins}</p>
                <FontAwesomeIcon icon={faBell} />
            </Div1>
        </Section1>
    );
};

export default FanciNavBar;
