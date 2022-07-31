import styled from "styled-components";


export const Form = styled.div`
        form{
        text-align: center;
        margin-top: 6em;
        & h2, p{
                margin: 0 auto;
                padding: .3em 0 ;
                text-align: left;
                width: clamp(270px, 60vw, 600px);
        }
        & input{
                width: clamp(270px, 60vw, 600px);
                padding: 1em;
                border-radius: 1.2em;
                margin: .5em;
                border: 1px solid aquamarine;
                :focus{
                        outline: unset;
                        border: 1px solid blueviolet;
                }
        }

}
        
`
export const DivBotonForm = styled.div`

                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-top: 8em;
                padding: 5em 0 0 0;
                input{
                        cursor: pointer;
                        background-color: #7FFFD4;
                }
                button{
                        background-color: aquamarine;
                        width: clamp(270px, 60vw, 600px);
                        padding: 1em;
                        border-radius: 1.2em;
                        border: none;
                        cursor: pointer;
                        margin: auto;
                }
                p{
                        display: flex;
                        justify-content: center;
                        margin-bottom: 5em;
                        a{
                                text-decoration: none;
                                padding: 0 .8em;
                                color: blueviolet;
                                border: none;
                                :hover{
                                        color: blue;
                                }
                        }
                }

`











