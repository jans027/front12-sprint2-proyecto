import styled from "styled-components";


// export const Video = styled.div`
//                 width: clamp(322px, 50%, 400px);
//                 border:1px solid red;
// `

export const Container1 = styled.section`
        margin: 6em auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
        p{
                width: 100%;
                text-align: center;
                padding: 1em;
        }
`
export const DivBotones = styled.div`
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        span{
                background-color: #dad7cd;
                width: 3em;
                height: 3em;
                margin:.5em;
                border-radius: .5em;
                text-align:center;
        }
`


export const Button1 = styled.button`
        width:90%;
        max-width: 450px;
        margin: 1em auto;
        padding: 1em;
        border-radius: 1em;
        border: none;
        background:linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
        box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        :hover{
                background:#83c5be;
        }
        :active{
                background:red;
        }
`