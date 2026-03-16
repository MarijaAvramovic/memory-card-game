import './Scoreboard.css'
 
export default function Scoreboard( { score=0, bestScore=0 }) {
    return(
        <div className='scoreboard'>
            <div>    <div>Score: {score}</div>
            <div>Best score: {bestScore}</div></div>
            <div className='nav'>
                <h1>MEMORY CARD GAME</h1>
            </div>
         
        </div>
    )
}