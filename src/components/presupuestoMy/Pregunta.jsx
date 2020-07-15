import React,{Fragment,useState} from 'react';
import './pregunta.css'
import AlertMSG from '../commons/Alert'

const Pregunta = ({guardarPresupuesto,guardarRestante,setShowQuestion}) => {
    const[cantidad,setCantidad] = useState(0)
    const[isValidForm, setIsValidForm] = useState(true)

    // Leer Presupuesto
    const definirPresupuesto = (e) => {
            setCantidad(
                parseInt(e.target.value, 10)
            )
    }

    // Validar Presupuesyo
    const validarPresupuesto = () => {
        if(cantidad <= 0 || isNaN(cantidad)) {
            setIsValidForm(false)
            return;
        } else {
            setIsValidForm(true)
            guardarPresupuesto(cantidad)
            guardarRestante(cantidad)
            setShowQuestion(false)
        }
    }

    return (<Fragment>
        <form>
            
            { !isValidForm &&
                <AlertMSG type="danger" msg="Validar campos"/>
            }
            <h4>Ingresa tú presupuesto</h4><br />
            <input 
                onChange= {definirPresupuesto} 
                type="number" 
                className="form-control"
                name="cantidad"
                placeholder="Coloca tu presupuesto."
                    /><br />
            <button 
                onClick = {()=> validarPresupuesto()}
                type="button" 
                className="btn btn-dark btnFull">Definir presupuesto</button>

        </form>
    </Fragment> );
}
 
export default Pregunta;