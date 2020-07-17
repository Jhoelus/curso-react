import React,{Fragment,useState, useEffect} from 'react'
import './Breaking.css'
import styled from '@emotion/styled'
import Question from './Question'

const Boton = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family:  Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 1rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .8s ease;
    padding: 5px 16px;

    :hover {
        cursor:pointer;
        background-size: 400px;
    }

`
export default function Breaking() {

    useEffect(() => {
        consultarApi()
    }, [])

    const [question, setquestion] = useState({})

    const consultarApi = async () => {
        const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        const frase = await api.json()
        setquestion(frase[0])
    }

    return (
        <Fragment>
            <div className="principalDivBreakingBad">
                <Question question={question}></Question>
                <Boton onClick = { () => consultarApi() }>Obtener frase</Boton>
            </div>
        </Fragment>
    )
}
