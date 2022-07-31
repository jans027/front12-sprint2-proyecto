import styled from "styled-components";




export const Stack = styled.nav`
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 2.2em;
            li{
                list-style: none;
                padding: 1em;
            }
`
export const H2 = styled.h2`
            padding: 1em;
`


export const Button = styled.nav`
            width:90%;
            max-width: 450px;
            display: flex;
            height: 80px;
            justify-content: space-between;
            align-items: center;
            margin: 1em auto;
            cursor: pointer;
            /* background-color: #e2eafc; */
            border-radius: 1em;
            border: 1px solid #90e0ef;
            :hover{
                background-color:#caf0f8;
            }
            :active{
                /* background-color:#abc4ff; */
                background-color: ${(props) => (props.isPink ? "pink" : "#3c7f8b")}
            }
            div{
                width: 80%;
                padding: 1em;
                font-size: .8em;
            }
            span{
                padding: 1em;
                color: #899878;
                /* border: 1px solid red; */
                width:10em;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                }
            }


`










