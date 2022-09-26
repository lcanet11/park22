import React, {Component} from 'react'; 
import './Home.css'


const registrarse = (event) => {
    event.preventDefault();
    var nombre;
    nombre = document.form_registro.nombre.value; 
    var apellido = document.form_registro.apellido.value; 
    var email = document.getElementById("email_id").value; 
    var telefono = document.getElementById("tel_id").value;
    var password = document.form_registro.password.value; 
    var confirmar_password=document.form_registro.confirmar_password.value; 
    console.log({nombre, apellido, email, password, confirmar_password});
    if(!nombre) {

        document.getElementById("nombre_error").innerHTML = "El campo nombre es obligatorio"
    } else {
        document.getElementById("nombre_error").innerHTML = ""
    }

    if(!apellido) {
        document.getElementById("apellido_error").innerHTML = "El campo apellido es obligatorio"
    } else {
        document.getElementById("nombre_error").innerHTML = ""
    }

    if(!telefono) {
        document.getElementById("tel_error").innerHTML = "El campo telefono es obligatorio"
    } else {
        document.getElementById("tel_error").innerHTML = ""
    }

    if(!password) {
        document.getElementById("pass_error").innerHTML = "El campo password es obligatorio"
    } else {
        document.getElementById("pass_error").innerHTML = ""
    }

    if(password !== confirmar_password) {
        document.getElementById("confirmar_error").innerHTML = "Los passwords no son iguales. Por favor confirme su password."
    } else {
        document.getElementById("confirmar_error").innerHTML = ""
    }

}

const proveedor = () => {
    var proveedor = document.getElementById("proveedor_id").value;
    console.log(proveedor);

    var servicio; 
    switch(proveedor) {
        case "1": servicio="";
        break;
        case "2": servicio="Claro";
        break;
        case "3": servicio="Personal"
        break;
        case "4": servicio="Movistar"
        break;
        case "5": servicio="Tuenti"
        break;
    }
}

class Home extends Component{
    render(){
        return(
            <form onSubmit={registrarse} name="form_registro">
            <div className="field">
            <label>Nombre</label>
            <input type="text" name="nombre" id="nombre_id"></input>
            </div>
            <div id="nombre_error" className="error"></div>

            <div className="field">
            <label>Apellido</label>
            <input type="text" name="apellido" id="apellido_id"></input>
            </div>
            <div id="apellido_error" className="error"></div>

            <div className="field">
            <label>Email</label>
            <input type="text" name="email" id="email_id"></input>
            </div>

            <div className="field">
            <label>Telefono</label>
            <input type="text" name="telefono" id="tel_id"></input>
            </div>
            <div id="tel_error" className="error"></div>

            <div>
            <label>Proveedor</label>
            <select name="proveedor" id="proveedor_id" onChange={proveedor}>
                <option value="1"></option>
                <option value="2">Claro</option>
                <option value="3">Personal</option>
                <option value="4">Movistar</option>
                <option value="5">Tuenti</option>
            </select>
            </div>

            <div className="field">
            <label>Password</label>
            <input type="text" name="password" id="password_id"></input>
            </div>
            <div id="pass_error" className="error"></div>

            <div className="field">
            <label>Confirmar Password</label>
            <input type="text" name="confirmar_password" id="confirmar_password_id"></input>
            </div>
            <div id="confirmar_error" className="error"></div>
            <button>Registrarse</button>
            </form>
        )
    }
}

export default Home; 