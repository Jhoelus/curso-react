import React,{Fragment} from 'react'
import '../../App.css'

const ListaGastos = ({gastos}) => {
    return ( <Fragment>
        <br />
        <h4>Listado de gastos</h4>
        {gastos.map((gasto,index) => (
            <Fragment key={gasto.id}>
                <div className="w-100 item" style={{backgroundColor:"white", marginBottom:"5px"}}>
                    <label className="w-50 mb-1"><b>{gasto.name}</b></label>
                    <label className="w-30 mr-3 pr-3 pl-3 monto">$ {gasto.monto}</label>
                </div>
            </Fragment>
        ))}
    </Fragment> );
}
 
export default ListaGastos;