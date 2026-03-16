export default function Card( pokemon) {

    return (
        <div>
           
                <img src={pokemon.image} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
        </div>
    )
}

 