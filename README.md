Memory card project.  The main goal of this project is to implement the concepts learned so far by using hooks to manage and utilize state while fetching and using data from an external API.

How the game works
 


Components:

scoreboard which counts the current score and a “Best Score” which shows the highest score you’ve achieved thus far.


card  - that display images(these images and texts are fetched from an external API) and informational text

Shuffle Cards Function - function that displays the cards in a random order anytime a user clicks one. 
Used [...pokemon].sort(() => Math.random() - 0.5) to make a shuffled copy of the array.
On card click it updates the state with setPokemon(shuffled), causing React to re-render the cards in a new random order.

2️⃣ Rendering Pokémon Cards

You use pokemon.map(...) to loop through the array and render a <Card /> component for each Pokémon.