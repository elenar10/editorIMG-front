import React from "react";


function Login() {
return(
    <div>
        <input id="email" type="email" placeholder="Email"></input>
    <label htmlFor="password" title="revisa que contenga @ y un dominio válido">Contraseña</label>
    <input id="password" type="password" placeholder="Contraseña" required></input>
    <input type="submit" value="Enviar"></input>
    </div>
)


}
export default Login;