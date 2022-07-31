import styled from "styled-components";



export const PrincipalProfile = styled.div`
            margin-top: 5em;
            width: 100%;
            max-width: 800px;
            margin:5em auto;

`
export const Back = styled.div`
            display: flex;
            width: 100%;
            align-items: center;
            text-decoration:none;
            color: gray;
            margin: 1.5em 0;
            a{
                padding: .7em;
                color: gray;
                :hover{
                    color: #bbd0ff;
                }
            }
            span{
                padding:1em  2em 1em .5em;
                width: 100%;
                text-align: center;
            }
`

export const InputProfile = styled.div`
            display: flex;
            padding: .5em;
            color: gray;
            justify-content: space-between;
            span{
                padding: 0;
            }
            Input{
                width: 90%;
                padding-left: 1em;
                border-radius: .5em;
                border: none;
                background-color: #e9ecef;
                :focus{
                        outline: unset;
                        border: 1px solid #d8e2dc;
                        background-color: aliceblue;
                }
            }
            button{
                border: none;
                color: gray;
                cursor: pointer;
                background-color:#ffffff;
                :hover{
                    background-color:#d8e2dc;
                }
            }
`

