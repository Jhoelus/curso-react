import React from 'react'
import styled from '@emotion/styled'

const SelectCotizador = styled.select`
    width: auto;
    flex: 1 1 auto;
    padding: 0.375rem 0.75rem;
    color: gray;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`

const SelectCotizadorH4 = styled.h6`
    color: white;
`
const LabelCotizador = styled.label`
    color: white;
`

export default function FormularioCotizador({marca, setmarca,year, setyear,plan, setplan}) {

    return (
        <form>
            <div className="input-group form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><b>Marca</b></span>
                </div>
                <SelectCotizador 
                    onChange = { e => setmarca(e.target.value)}
                    value={marca}>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </SelectCotizador>
                {/* <input type="text" className="form-control" placeholder="Marca" /> */}
            </div>
            <div className="input-group form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><b>Año</b></span>
                </div>
                <SelectCotizador  
                    onChange = { e => setyear(e.target.value) }
                    value = {year}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </SelectCotizador>
            </div>
            <div>
                <SelectCotizadorH4>Plan</SelectCotizadorH4>
                
                <div style={{marginLeft: '30px'}} className="form-check disabled">
                    <input className="form-check-input" 
                        type="radio" 
                        name="plan" 
                        value="basico"
                        onChange = { e => setplan(e.target.value)} 
                        checked = {plan === "basico"}
                        />
                    <LabelCotizador className="form-check-label">
                        Básico
                    </LabelCotizador>
                </div>
                <div style={{marginLeft: '30px'}} className="form-check disabled">
                    <input className="form-check-input" 
                        type="radio" 
                        name="plan" 
                        value="completo"
                        onChange = { e => setplan(e.target.value)} 
                        checked = {plan === "completo"}
                        />
                    <LabelCotizador className="form-check-label">
                        Completo
                    </LabelCotizador>
                </div>
            </div>
            {/* <button className="btn float-right login_btn"> Cotizar </button> */}
        </form>
    )
}
