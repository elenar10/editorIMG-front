import React from "react";


function Register() {
return(
    <div>
        <input id="email" type="email" placeholder="Email"></input>
    <label htmlFor="password" title="revisa que contenga @ y un dominio válido">Contraseña</label>
    <input id="password" type="password" placeholder="Contraseña" required></input>
    <input id="password" type="password" placeholder="Repite tu contraseña" required></input>
    <input type="submit" value="Enviar"></input>
    </div>
)


}
export default Register;