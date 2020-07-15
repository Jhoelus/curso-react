import React, { Fragment,useState } from 'react'
import Alert from "../commons/Alert";
import NotasMy from '../notasMy/Notas';

export default function Login({setisLoggin,isLoggin}) {

    const [user, setuser] = useState("")
    const [password, setpassword] = useState("")
    const [isFormValid, setIsFormValid] = useState(true)
    const [msg, setMsg]  = useState("")

    const doLoggin = () => {
        if(!user || !password){
            setMsg("Valida los campo.")
            setIsFormValid(false)
        } else if(user !== "Jhoel" || password !== "123" ) {
            setMsg("Campos incorrectos")
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
            setisLoggin(true)
        }
    }

    return (
        <Fragment>
            {
                !isLoggin ? (
                    <div className="wrapper fadeInDown">
                    <div className="formContent">
                        { !isFormValid &&
                            <Alert type="danger" msg={msg}/>
                        }
                        <div className="fadeIn first">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Crystal_Clear_app_Login_Manager.svg" id="icon" alt="User Icon" />
                        </div>

                        <form>
                            <input type="text" onChange={e=>setuser(e.target.value)} 
                                id="login" className="fadeIn second txtLogin" 
                                name="login" placeholder="login" />
                            <input type="password" 
                                onChange={e=>setpassword(e.target.value)} 
                                id="password" className="fadeIn third txtLogin" 
                                name="login" placeholder="password" />
                            <button type="button" className="btn btn-dark fadeIn fourth btnLoggin" onClick={()=>doLoggin()}>Log In</button>
                        </form>
                    </div>
                </div>) : (
                    <NotasMy />
                )
            }
            
        </Fragment>
    )
}