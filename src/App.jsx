import { useState, useEffect} from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'
import Card from './components/Card'

function App() {

   const [pokemon, setPokemon] = useState(null);

   useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(res => res.json())
      .then(data => {
        setPokemon({
          name: data.name,
          image: data.sprites.front_default
        });
      });
  }, []);

  return(

    <>
      <Scoreboard />
      <div>
      {pokemon && (
        <Card
          name={pokemon.name}
          image={pokemon.image}
        />
      )}
    </div>
    </>
 
  
  )
  

}

export default App
 

 