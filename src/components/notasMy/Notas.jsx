//imr import
// sfc genera estructura
import React, { useState,useEffect}  from 'react';
import uuid from 'uuid/dist/v4'
import './notas.css'

const NotasMy = () => {
    
  let citasScope = JSON.parse(localStorage.getItem("citas")) || []

  const [formDatos, actualizarDatosForm] = useState({
    nombre:"",
    apellidos:"",
    observaciones:""
  })

  const[formValid,setFormValid] = useState(false)
  const[citas,setCitas] = useState(citasScope)

  useEffect(()=>{
    localStorage.setItem("citas",JSON.stringify(citas))
  },[citas]); // cada ves que cambia un state se vuelve a ejecutar el useEffect


  let {nombre,apellidos,observaciones} = formDatos
  
  const actualizarValoresForm = (e) => {
    actualizarDatosForm({
      ...formDatos,
      [e.target.name] : e.target.value
    })
  }

  const eliminarCita = id => {
    citas.forEach((cita, index) => {
      let newCitas = citas.filter(item => item.id !== id)
      setCitas(newCitas)
    });
  }

  //Validar datos
  const crearCita = e => {
    if(nombre.trim() === "" || apellidos.trim() === "" ) {
      setFormValid(true)
      return ;
    } else {
      setFormValid(false)
      formDatos.id = uuid()
      setCitas([...citas, formDatos])
      
      actualizarDatosForm(
        {
          nombre:"",
          apellidos:"",
          observaciones:""
        }
      )
    }
  }

    return (  
        <div className="principal" >
            <div className="container" >
            <form>
              <br />
              <div className = "row"> 
                <div className = "col-6">
                    <h4>AGREGAR NOTA NUEVA</h4><br/>
                    { formValid &&
                    <div className="alert alert-danger" role="alert">
                        Validar campos obligatorios.
                    </div>
                    }
                    <div className="form-group">
                    <label className="labelWhite">Nombre * </label>
                    <input name="nombre" value={nombre} onChange={ actualizarValoresForm } type="text" className="form-control" id="nombre"/>
                    </div>
                    <div className="form-group">
                    <label className="labelWhite">Apellidos * </label>
                    <input name="apellidos"  value={apellidos}  onChange={ actualizarValoresForm } type="text" className="form-control" id="apellidos"/>
                    </div>
                    <div className="form-group">
                    <label className="labelWhite">Nota: </label>
                    <textarea name="observaciones"  value={observaciones}  onChange={ actualizarValoresForm } className="form-control" id="observaciones"/>
                    </div>
                    <button type="button" className="btn btn-dark float-right btnFull" onClick={() => crearCita()}>Enviar</button>

                </div>
                
                <div className = "col-6">
                    <h4>NOTAS.</h4><br/>
                    <div className = "row"> 
                    {
                        citas.map((item,index) =>
                        <div className = "col-5 nota" key={item.id +"-"+ index}>
                            <b> <label>Nombre:</label> </b>{item.nombre}<br />
                            <b> <label>Apellido:</label></b>{item.apellidos}<br />
                            <b> <label>Descripcion:</label></b>{item.observaciones}<br />
                            <button type="button" className="btn btn-dark float-right btnFull" onClick={() => eliminarCita(item.id)}>Eliminar</button>
                        </div>
                        )
                    }
                    </div>
                </div>
            </div>
            </form>
            </div>
        </div>
    );
}
 
export default NotasMy;