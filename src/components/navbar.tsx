import * as React from 'react';
import style from './styles/navbar.module.css'


export const NavBar = () => {
    return (
        <ul className={style.ul}>
            <li className={style.li}><a className={style.li_a} href="#home">Home</a></li>
            {/* <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li> */}
        </ul>
    );
}
