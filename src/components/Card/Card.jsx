import React from 'react';
import styles from '../Card/Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.conteiner}>
         <div className={styles.buttonconteiner}>
         <button onClick={props.onClose}>X</button>
         </div>
         <h2 className={styles.title}>{props.name}</h2>
         <img className={styles.image} src={props.image} alt= {props.name} />
         <div className={styles.data}>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
         </div>
      </div>
   );
}
