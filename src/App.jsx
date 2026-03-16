import { useState, useEffect} from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'
import Card from './components/Card'

export default function App() {

   const [pokemon, setPokemon] = useState([]);

   useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then(res => res.json())
      .then(data => {
        setPokemon(data.results);
      });
  }, []);

  return( 

    <>
      <Scoreboard />
      <section>
 <div className="grid">
      {pokemon.map((poke, index) => (
        <Card
          key={index}
          name={poke.name}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
        />
      ))}
    </div>

      </section>
     
    
    </>
 
  
  )
  

}