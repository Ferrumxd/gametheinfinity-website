import * as React from 'react';
import style from './styles/login.module.css'
import { firebase, googleProvider } from './firebase/firebase'

export const Login = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <div className={style.loginWrapper}>
            <div className={style.mainLogin}>
                <h1 className={style.loginTitle}>Login</h1>
                <input placeholder="Email" className={style.loginInput} onChange={({ target }) => {
                    setEmail(target.value)
                }} />
                <input placeholder="Passwort" className={style.loginInput} onChange={({ target }) => {
                    setPassword(target.value)
                }}/>
                <button className={style.loginButton} onClick={() => {
                    firebase.auth().signInWithEmailAndPassword(email, password)
                }}>Login</button>
                <button className={style.loginWithGoogleButton} onClick={() => {
                    firebase.auth().signInWithPopup(googleProvider)
                }}>Sign in with Google</button>             
            </div>
        </div>
    )
}