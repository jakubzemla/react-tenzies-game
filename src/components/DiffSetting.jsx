import './Button.scss'

const DiffSettings = (props) => {
    return (<div className="buttons-wrapper">
        <button className="game-button" id="10" onClick={(event) => props.getDifficulty(event)}>Easy</button>
        <button className="game-button" id="15" onClick={(event) => props.getDifficulty(event)}>Medium</button>
        <button className="game-button" id="20" onClick={(event) => props.getDifficulty(event)}>Hard</button>
    </div>
    )
}

export default DiffSettings