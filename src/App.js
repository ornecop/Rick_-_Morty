import './App.css'
import { useState } from 'react'
import Cards from './components/Cards/Cards'
import NavBar from './components/Nav/NavBar'

function App () {
const [ characters, setCharacters ] = useState ([]);

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
};

return (
  <div className='App' style={{ padding: '25px' }}>
    <NavBar onSearch={onSearch} />
    <Cards characters={characters} onClose={onClose}/>
  </div>
);
};

export default App;