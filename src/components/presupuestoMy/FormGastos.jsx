import React,{Fragment,useState} from 'react'
import AlertMSG from "../commons/Alert"
import uuid from 'uuid/dist/v4'

const FormGastos = ({agregarNuevoGasto}) => {
    
    const[name, setName] = useState("")
    const[monto, setMonto] = useState(0)
    const[isValidForm, setIsValidForm] = useState(true) 
 
    const agregarGasto = () => {
        if(name.trim() === "" || isNaN(parseInt(monto.trim())) || parseInt(monto.trim()) < 1) {
            setIsValidForm(false)   
            return;
        } else {
            setIsValidForm(true) 
            
            let gasto = {
                "name": name,
                "monto": monto,
                "id": uuid()
            }

            agregarNuevoGasto(gasto)

            setName("")
            setMonto(0)
        }
    }

    return ( 
        <Fragment>
            <form>
                { !isValidForm &&
                    <AlertMSG type="danger" msg="Validar campos obligatorios."/>
                }

                <h4>Agrega tús gasto aquí</h4><br />
                <div className="form-group">
                    <label>Nombre gasto *</label>
                    <input type="text" 
                        className="form-control" 
                        name="name"
                        onChange={ e => setName(e.target.value)}
                        value={name}
                        placeholder="Ej. Transporte" />
                </div>
                <div className="form-group">
                    <label>Cantidad gasto *</label>
                    <input type="number" 
                        className="form-control" 
                        name="monto"
                        onChange={ e => setMonto(e.target.value)}
                        value={monto}
                        placeholder="Ej. 300" />
                </div>
                <button 
                        onClick = {()=> agregarGasto()}
                        type="button" 
                        className="btn btn-dark btnFull">Agregar gasto</button>
            </form>
        </Fragment>
     );
}
 
export default FormGastos;