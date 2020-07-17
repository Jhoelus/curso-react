import React, {useState, Fragment} from 'react'
import styled from '@emotion/styled'
import './cotizador.css'
import FormularioCotizador from './FormularioCotizador'
import AlertMSG from "../commons/Alert";
import {  obtenerDiferenciaYears,calcularMarca, calcularPlan } from "../commons/helper";
import DetalleCotizacion from './DetalleCotizacion';
import Spinner from "../commons/Spinner";

const CotizadorDiv = styled.div`
    background-size: cover;
    background-repeat:no-repeat;
    height: 91vh;
`
const ContainerDiv = styled.div`
    height: 100%;
    align-content: center;
`


export default function Cotizador() {

    const [marca, setmarca] = useState("")
    const [year, setyear] = useState("")
    const [plan, setplan] = useState("")

    const [isvalidForm, setisvalidForm] = useState(true)
    const[msg, setMsg] = useState("")
    const [detalle, setdetalle] = useState(null)
    const [showSpinner, setshowSpinner] = useState(true)

    const cotizarSeguro = () => {
        if(!marca || !year || !plan) {
            setMsg("Ingrese todo los datos")
            setisvalidForm(false)
        } else {
            // base de 2000
            let resultado = 2000
            const diferenciaYears = obtenerDiferenciaYears(year)
            
            //Quitar el 3% por year
            resultado = resultado - ((diferenciaYears * 3) * resultado) / 100;

            // Incrementar dependiendo a la marca
            // Americano 15%, Asiatico 5%, Europeo 30%
            resultado = calcularMarca(marca) * resultado;
            
            //Incrementa dependiendo al plan
            // basico 20%, Completo 50%
            resultado = parseFloat(calcularPlan(plan) * resultado).toFixed(2);           
            
            setdetalle({
                "cotizacion": resultado,
                "datos": {
                    "marca": marca,
                    "year": year,
                    "plan":plan
                }
            })

            setisvalidForm(true)
            
        }
    }

    setTimeout(
        () => {
            setshowSpinner(false)
        },3000
    )

    return (
        <Fragment>
            {   
                showSpinner ?
                    <Spinner /> :
                    <CotizadorDiv className="fondo">
            
                    <ContainerDiv className="container" >
                        <div className="d-flex h-100">
                            <div className="card">
                                {
                                    !isvalidForm &&
                                    <AlertMSG msg = {msg} type="danger"/>
                                }
                                <div className="card-header">
                                    <h3>Cotizador de seguros</h3>
                                </div>
                                <div className="card-body">
                                   <FormularioCotizador 
                                        marca={marca} setmarca={setmarca}
                                        year = {year} setyear={setyear}
                                        plan = {plan} setplan={setplan}/>
                                </div>
                                <div className="card-footer">
                                        <div className="form-group">
                                            <button className="btn float-right login_btn" onClick= {() => cotizarSeguro()}> Cotizar </button>
                                        </div>
                                </div>
                            </div>
                            {
                                detalle !== null &&
        
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Detalle Cotización</h3>
                                    </div>
                                    <div className="card-body">
                                        <DetalleCotizacion detalle = {detalle} />
                                    </div>
                                </div>
                            }
                        </div>
                    </ContainerDiv>
                </CotizadorDiv>
            }
        </Fragment>
    )
}
