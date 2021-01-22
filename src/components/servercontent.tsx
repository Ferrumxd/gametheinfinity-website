import * as React from 'react';
import { useHistory } from 'react-router';
import style from './styles/servercontent.module.css'

export const ServerContent = () => {

    const history = useHistory()

    return (
        <div className={style.div1}>
            <div className={style.div2}>
                <h3 className={style.h3_title}>Manage</h3>
                <p></p>
                <button className={style.button} onClick={() => {
                    history.push("/test")
                }}>Start</button>
            </div>
            <div className={style.div2}>
                <h3 className={style.h3_title}>Info</h3>
            </div>
            <div className={style.div2}>
                <h3 className={style.h3_title}>User</h3>
            </div>
        </div>
    )
}
