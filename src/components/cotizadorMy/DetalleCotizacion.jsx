import React from 'react'
import styled from '@emotion/styled'
import { primerMayuscula } from "../commons/helper"
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

const DetalleDiv = styled.div`
    padding-top:10px;

    & label {
        color:white
    }
`

const DetalleP = styled.div`
    color:white;
    & p {
        font-size:large
    }
`

export default function DetalleCotizacion({detalle}) {

    // if(detalle === undefined || detalle.datos === undefined) {
    //     return null;
    // }

    return (
        <DetalleDiv>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">MARCA</th>
                    <th scope="col">AÑO</th>
                    <th scope="col">PLAN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{primerMayuscula(detalle.datos.marca)}</td>
                        <td>{detalle.datos.year}</td>
                        <td>{primerMayuscula(detalle.datos.plan)}</td>
                    </tr>
                </tbody>
            </table>
            <DetalleP className="text-right">
                {/* <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={detalle.cotizacion}
                        timeout={{enter:500,exit:500}}
                    > */}
                        <p><b>EL TOTAL ES: ${detalle.cotizacion}</b></p>
                    {/* </CSSTransition>
                </TransitionGroup> */}
            </DetalleP>
        </DetalleDiv>
    )
}
