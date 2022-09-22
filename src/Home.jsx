import React, {Component} from 'react'; 

class Home extends Component{
    render(){
        return(
            <>
            <div class="field">
            <label>Nombre</label>
            <input type="text" name="nombre" id="nombre_id"></input>
            </div>

            <div class="field">
            <label>Apellido</label>
            <input type="text" name="apellido" id="apellido_id"></input>
            </div>

            <div class="field">
            <label>Email</label>
            <input type="text" name="email" id="email_id"></input>
            </div>

            <div class="field">
            <label>Telephone</label>
            <input type="text" name="tel" id="tel_id"></input>
            </div>

            <div>
            <label>Proveedor</label>
            <select name="proveedor" id="proveedor_id" onchange="Proveedor()">
                <option value="1">Claro</option>
                <option value="2">Personal</option>
                <option value="3">Movistar</option>
                <option value="3">Tuenti</option>
            </select>
            </div>

            <div class="field">
            <label>Password</label>
            <input type="text" name="password" id="password_id"></input>
            </div>

            <div class="field">
            <label>Confirmar Password</label>
            <input type="text" name="password" id="password_id"></input>
            </div>
            </>
        )
    }
}

export default Home; 