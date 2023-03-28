import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return ( 
   <div style={{
      display: 'flex', justifyContent: 'space-evenly'
   }}>
      {characters.map(character => (
         <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
         />
      ))}
   </div>
   );
}
