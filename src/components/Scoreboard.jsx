import './Scoreboard.css'
 
export default function Scoreboard( { score=0, bestScore=0 }) {
    return(
        <div className='scoreboard'>

             <div className='nav'>
                <h3>MEMORY CARD GAME</h3>
            </div>
            <div>    <div>Score: {score}</div>
            <div>Best score: {bestScore}</div></div>
            
         
        </div>
    )
}