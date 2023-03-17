import React, { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [character, setCharacter] = useState('');
   const handleChange = (e) => {
      const { value } = e.target;
      setCharacter(value)
   };

   return (
      <div className={styles.conteiner}>
         <input type='search' name="search" id="" onChange={handleChange} />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
};
