import React from 'react';
import './SignupBody.css'

const SignupBody = () => {
    return(
    <div className="signup-container">
        <button className="signup-container__fb-button">
            
            <p><img src="https://icongr.am/entypo/facebook-with-circle.svg?size=128&color=ffffff" height="25px" alt="facebook-repeco-signup" />   REGÍSTRATE CON FACEBOOK</p>
        </button>
        <button className="signup-container__google-button">
            <p><img src="https://icongr.am/simple/google.svg?size=128&color=000000&colored=false" height="25px" alt="google-repeco-signup" />   REGÍSTRATE CON GOOGLE</p>
                   
        </button>
        <div className="signup-container__line">
            <p className="signup-container__line-first"></p>
            <p className="signup-container__line-letter">o</p>
            <p className="signup-container__line-second"></p>
        </div>
            <form action="" className="form-container">
                <label for="email">Correo electrónico</label><br/>
                <input className="input" type="email" /><br/>
                <label for="password">Nueva Contraseña</label><br/>
                <input className="input" type="password" /><br/>
                <label for="password">Repetir Contraseña</label><br/>
                <input className="input" type="password" /><br/>
                <input className="form-container__submit" type="submit" value="Regístrarme" /><br/>
            </form>
            
            <p className="signup-container__question">
            ¿Ya tienes una cuenta?
            </p>
            <a href="" className="signup-container__login">Iniciar Sesión</a>
    </div>
    );
};

export default SignupBody;