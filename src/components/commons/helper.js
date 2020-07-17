export const revisarPresupuesto = (presupuesto, restante) => {
    let clase = "";
    
    if((presupuesto/4) > restante) {
        clase = "alert-danger"
    }else if((presupuesto/2) > restante) {
        clase = "alert-warning"
    }else {
        clase = "alert-success"
    }

    return clase;
}

export const obtenerDiferenciaYears = (year)  => {
    return new Date().getFullYear() - year;
}

export const calcularMarca = (marca) => {
    let incremento;

    switch(marca){
        case 'americano':
            incremento = 1.15
        break;
        case 'asiatico':
            incremento = 1.05
        break;
        case 'europeo':
            incremento = 1.30
        break;
        default:
            break
    }
    
    return incremento
}

export const calcularPlan = (plan) => {
    let incremento;

    switch(plan){
        case 'completo':
            incremento = 1.50
        break;
        case 'basico':
            incremento = 1.20
        break;
        default:
            break
    }

    return incremento
}

// Primer Letra mayuscula
export const primerMayuscula = (text) => {
    let cadena = text.charAt(0).toUpperCase() + text.slice(1)
    return cadena
}