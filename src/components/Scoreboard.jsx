export default function Scoreboard( { score=0, bestScore=0 }) {
    return(
        <div>
            <div>Score: {score}</div>
            <div>Best score: {bestScore}</div>
        </div>
    )
}