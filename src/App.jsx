import { useState, useEffect} from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'
import Card from './components/Card'

export default function App() {

   const [pokemon, setPokemon] = useState([]);
   const [score, setScore] = useState(0);
   const [clicked, setClicked] = useState([]);
 


useEffect(() => {
  async function fetchPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    const data = await res.json();

    // Fetch details for each pokemon to get the image
    const detailedPokemon = await Promise.all(
      data.results.map(async (poke) => {
        const res = await fetch(poke.url);
        const pokeData = await res.json();
        return {
          id: pokeData.id,
          name: pokeData.name,
          image: pokeData.sprites.other.dream_world.front_default,
        };
      })
    );

    setPokemon(detailedPokemon);
  }

  fetchPokemon();
}, []);



    function shuffleCards() {
    const shuffled = [...pokemon].sort(() => Math.random() - 0.5);
    setPokemon(shuffled);
  }

    function handleCardClick(pokeId) {
    if (!clicked.includes(pokeId)) {
      setScore(prev => prev + 1);
      setClicked(prev => [...prev, pokeId]);
    }
    shuffleCards();
  }
  return( 

    <>
      <Scoreboard score={score} />
      <section>
 <div className="grid">
      {pokemon.map((poke) => (
    <Card
      key={poke.id}
      pokemon={poke}
      onClick={() => handleCardClick(poke.id)}
    />
  ))}
    </div>
 
      </section>
     
    
    </>
 
  
  )
  

}