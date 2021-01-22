import * as React from 'react';
import style from './styles/login.module.css'

export const Login = () => {
    const loginWithEmailAndPasswort = {

    }

    return (
        <div className={style.loginWrapper}>
            <div className={style.mainLogin}>
                <h1 className={style.loginTitle}>Login</h1>
                <input placeholder="Email" className={style.loginInput} />
                <input placeholder="Passwort" className={style.loginInput} />
                <button className={style.loginButton} onClick={loginWithEmailAndPasswort}>Login</button>            
            </div>
        </div>
    )
}