import './Button.scss'

const Button = (props) => {
    return (
    <div className="buttons-wrapper">
        {props.isWinner || <button className="game-button" onClick={props.roll}>Roll</button>}
        {props.isWinner && <button className="game-button" onClick={props.reset}>Reset game</button>}
    </div>
    )
}

export default Button