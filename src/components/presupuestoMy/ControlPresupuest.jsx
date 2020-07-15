import React,{Fragment} from 'react'
import {revisarPresupuesto} from '../commons/helper'

export default function ControlPresupuest({presupuesto, restante}) {
    return (
        <Fragment>
            <div className="msgAlert alert alert-primary" >Presupuesto<b className="float-right">${presupuesto}</b></div>
            <div className={"msgAlert alert "+revisarPresupuesto(presupuesto, restante) } >Restante<b className="float-right">${restante}</b></div>
        </Fragment>
        
    )
}
