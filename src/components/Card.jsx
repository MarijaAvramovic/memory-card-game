export default function Card( { pokemon, onClick}) {

    return (
        <div className="card" onClick={onClick}>
                <div>

                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
                 
                  <p>{pokemon.name}</p>
        </div>
    )
}

 