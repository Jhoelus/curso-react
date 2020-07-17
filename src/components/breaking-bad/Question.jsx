import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding: 1rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:900px;
    margin-top:3rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        /* font-weight: bold; */

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position:absolute;
            left: -1rem;
            top:-2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }

`

export default function Question({question}) {

    // Valida si el objeto question esta vacio
    if(Object.keys(question).length === 0) {
        return null
    }

    return (
        <ContenedorFrase>
            <h1><b>{question.quote}</b></h1>
            <p>{question.author}</p>
        </ContenedorFrase>
    )
}
