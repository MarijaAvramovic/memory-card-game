Memory card project - https://memory-card-game-70db9d.netlify.app/ -

Click new cards → gain points

Click a repeated card → lose points, reset, best score updates

Cards shuffle every click

# The main goal of this project is to implement the concepts learned so far by using hooks to manage and utilize state while fetching and using data from an external API.

How the game works
Components:
- scoreboard which counts the current score and a “Best Score” which shows the highest score you’ve achieved thus far.
- card  - that display images(these images and texts are fetched from an external API) and informational text

Shuffle Cards Function - function that displays the cards in a random order anytime a user clicks one. 
Used [...pokemon].sort(() => Math.random() - 0.5) to make a shuffled copy of the array.
On card click it updates the state with setPokemon(shuffled), causing React to re-render the cards in a new random order.

handleCardClick(pokeId) function:

Checks if the clicked Pokémon ID is not already in the clicked array in state.
If it’s new, increments the score by 1 and adds the ID to the clicked array.
Shuffles the cards after every click. Each card gives a point only once, and the board reshuffles every time a card is clicked. If clicked twice resets the game and update best score in current score is higher then best score.