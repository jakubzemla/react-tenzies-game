import './Dice.scss'

const Dice = (props) => {
    return(
        <div className={props.isMarked ? "dice marked" : "dice"} onClick={(event) => props.toggleDice(event)} id={props.id}>
           {props.number}
        </div>
    )
}

export default Dice