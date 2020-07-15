import React from 'react'

//Typos de alert
//danger,warning,success
const AlertMSG = ({type,msg}) => {
    return (  
        <div className={"alert alert-"+type} role="alert">
            {msg}
        </div>
    );
}
 
export default AlertMSG;