import React from 'react';
import styles from './converter.module.scss'

export const Converter = () => {

    return <div className={styles.converter}>
        <input type="text" placeholder={"eur"}/>
        <input type="text" placeholder={"usd"}/>
        <button> convert</button>
    </div>
};
