import React,{Fragment,useState} from 'react'
import Pregunta from './Pregunta';
import FormGastos from './FormGastos';
import ListaGastos from './ListaGatos';
import ControlPresupuest from './ControlPresupuest';

const Presupuesto = () => {

    const[presupuesto, guardarPresupuesto] = useState(0)
    const[restante, guardarRestante] = useState(0)
    const[gastos, guardarGasto] = useState([])

    const[showQuestion, setShowQuestion] = useState(true)

    const agregarNuevoGasto = (gasto) => {
        guardarGasto([...gastos, gasto])
        let restanteNew = restante - gasto.monto
        guardarRestante(restanteNew)
    }
    
    return (  
        <Fragment>
            <div className="container text-center mt-2 presupuesto">
                <h1>Gatos Semanales</h1>
                
                <div className="formContent mt-5 formGastos">
                        { 
                            showQuestion ? (
                                <Fragment>
                                    <Pregunta 
                                        guardarPresupuesto={guardarPresupuesto}
                                        guardarRestante={guardarRestante}
                                        setShowQuestion={setShowQuestion}
                                    />
                                    <br />
                                </Fragment>
                            ) : (
                                <div className="row">
                                    <div className="col-6">
                                        <FormGastos 
                                        agregarNuevoGasto={agregarNuevoGasto} />
                                    </div>
                                    <div className="col-6">
                                        <ListaGastos gastos={gastos}/>
                                        <ControlPresupuest 
                                            presupuesto={presupuesto}
                                            restante={restante}/>
                                    </div>
                                </div>
                            )
                        }
                </div>
            </div>
        </Fragment>
    );
}
 
export default Presupuesto;