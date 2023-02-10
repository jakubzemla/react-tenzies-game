import './DiceWrapper.scss'
import Dice from './Dice'

const DiceWrapper = (props) => {
    const diceToRender = props.diceList.map(dice => {
        return (
            <Dice key={dice.id} {...dice} toggleDice={props.toggleDice}/>
        )
    })
    return(
        <div className="dice-wrapper">
            {diceToRender}
            {props.isWinner && <div className="win-info">
                <h2>Winner</h2>
                <p>Attempts: {props.attempts}</p>
            </div>}
        </div>
    )
}

export default DiceWrapper